import React from 'react'
import Part from '../Part/Part'

const Content = (props) => {
  return props.array.map(part => 
  <Part 
    key={part.id} 
    part={part.name} 
    exercises={part.exercises} 
  />);
}

export default Content