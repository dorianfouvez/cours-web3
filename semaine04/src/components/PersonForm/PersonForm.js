import React from 'react'

const PersonForm = ({ onSubmit, inputs = [] }) => {
  return (
    <form onSubmit={onSubmit}>
        {inputs.map(input => <div key={input.label}>{input.label}: <input value={input.value} onChange={input.onChange} /></div>)}
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm