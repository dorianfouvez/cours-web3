import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from '../Filter/Filter'
import PersonForm from '../PersonForm/PersonForm'
import Persons from '../Persons/Persons'

const App = () => {

  const fetchPersons = () => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }

  useEffect(() => fetchPersons(), [])

  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setNewFilter ] = useState('')

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const inputs = [ { label: 'name', value: newName, onChange: handleNameChange }, 
    { label: 'number', value: newNumber, onChange: handleNumberChange }
  ]
  
  const addPerson = (event) => {
    event.preventDefault()

    if(persons.find(person => person.name === newName)){
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }
  
    setPersons(persons.concat(personObject))
    setNewName('')
    setNewNumber('')
  }

  const filtredPersons = persons.filter(person => person.name.match(`.*${filter}.*`));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm onSubmit={addPerson} inputs={inputs} />
      <h2>Numbers</h2>
      <Persons persons={filtredPersons} />
    </div>
  )
}

export default App
