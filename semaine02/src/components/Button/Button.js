import React from 'react'

const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    let i = parseInt(e.target.dataset.delta);
    changeCount(i);
  }

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  )
}

export default Button