import React from 'react'

const Button = ({ onClick, text, delta }) => {
  const handleClick = (e) => {
    let i = parseInt(e.target.dataset.delta);
    onClick(i);
  }

  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  )
}

export default Button