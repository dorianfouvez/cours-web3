import React from 'react'

const Opinion = ({ opinion }) => {
  return (
    <div>{opinion.label} : {opinion.votes}</div>
  )
}

export default Opinion