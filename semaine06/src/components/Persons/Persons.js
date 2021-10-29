import React from 'react'
import Person from '../Person/Person'
import personService from '../PersonAxios/PersonAxios'

const Persons = ({ persons, showListUpdated }) => {

  const handleDelete = (person) => {
    if(window.confirm(`Do you really want to delete this contact (${person.name})?`)){
      personService.Delete(person.id)
        .then(data => {
          showListUpdated()
        })
    }
  }

  return (
    <div>{persons.map(person => <div key={person.name}><Person person={person} /> <button onClick={() => handleDelete(person)}>delete</button></div> )}</div>
  )
}

export default Persons