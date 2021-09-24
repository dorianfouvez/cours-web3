import React from 'react'

const Button = ({ changeCount, text, delta }) => {
  const handleClick = (e) => {
    changeCount(parseInt(e.target.dataset.delta));
  }

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  )
}

export default Button