import React from 'react'

let changeCount;

const handleClick = (e) => {
  let i = parseInt(e.target.dataset.delta);
  changeCount(i);
}

const Button = ({ onClick, text, delta }) => {
  changeCount = onClick;
  return (
    <button onClick={handleClick} data-delta={delta}>
      {text}
    </button>
  )
}

export default Button