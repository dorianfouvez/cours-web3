import React from 'react'

const PersonForm = ({ addPerson, newName, setNewName, newNumber, setNewNumber }) => {
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }
    const handleAddPerson = (event) => {
        event.preventDefault()
    
        addPerson();

        setNewName('')
        setNewNumber('')
    }

    return (
    <form onSubmit={handleAddPerson}>
        <div>name: <input value={newName} onChange={handleNameChange} /></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange} /></div>
        <div>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default PersonForm