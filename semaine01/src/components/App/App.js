import React from 'react'
import Header from '../Header/Header'
import Content from '../Content/Content'
import Total from '../Total/Total'
import 'style.css'
import './App.css'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 20
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const array = [ part1, exercises1, part2, exercises2, part3, exercises3 ]

  return (
    <div>
      <Header course={course} />
      <Content array={array} />
      <Total exercises={exercises1 + exercises2 + exercises3} />
      <h1 className="header">Test</h1>
    </div>
  )
}

export default App