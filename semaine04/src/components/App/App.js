import React, { useState } from 'react'
import Filter from '../Filter/Filter'
import PersonForm from '../PersonForm/PersonForm'
import Persons from '../Persons/Persons'

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
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

  const inputs = [ { label: 'name', value: newName, onChange: handleNameChange }, 
    { label: 'number', value: newNumber, onChange: handleNumberChange }
  ]

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
