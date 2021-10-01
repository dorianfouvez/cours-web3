import React from 'react'

const Button = ({ changeCount, text, count }) => {
  const handleClick = (e) => {
    changeCount(parseInt(count)+1);
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button