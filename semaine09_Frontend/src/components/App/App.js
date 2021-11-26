import React, { useState, useEffect } from 'react'
import Filter from '../Filter/Filter'
import PersonForm from '../PersonForm/PersonForm'
import Persons from '../Persons/Persons'
import personService from '../PersonAxios/PersonAxios'

const App = () => {

  const initialLoad = () => {
    personService.getAll()
      .then(initList => {
        setPersons(initList)
      })
  }
  useEffect(() => initialLoad(), [])
  


  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setNewFilter ] = useState('')

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  
  const addPerson = () => {
    /*if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())){
      window.alert(`${newName} is already added to phonebook`);
      return;
    }*/

    const personObject = {
      name: newName,
      number: newNumber,
    }

    personService.create(personObject)
      .then(result => {
        if(persons.find(person => person.name.toLowerCase() === newName.toLowerCase())){
          initialLoad();
        }else{
          setPersons(persons.concat(result))
        }
      })
      .catch(err =>{
        setNewName(newName);
        setNewNumber(newNumber);
        console.log("Frontend", err);
        window.alert("Something is missing !");
      });
  }

  const filtredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleChange={handleFilterChange} />
      <h2>Add a new</h2>
      <PersonForm addPerson={addPerson} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} />
      <h2>Numbers</h2>
      <Persons persons={filtredPersons} showListUpdated={initialLoad} />
    </div>
  )
}

export default App
