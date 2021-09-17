import React from 'react'
import Part from '../Part/Part'

const Content = (props) => {
  let i = 0
    return (
      <>
        <Part part={props.array[i++]} exercises={props.array[i++]} />
        <Part part={props.array[i++]} exercises={props.array[i++]} />
        <Part part={props.array[i++]} exercises={props.array[i++]} />
      </>
    )
}

export default Content