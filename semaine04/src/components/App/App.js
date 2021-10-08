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

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const addPerson = () => {
    if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())){
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    }
  
    setPersons(persons.concat(personObject))
  }

  const filtredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={filtredPersons} />
    </div>
  )
}

export default App
