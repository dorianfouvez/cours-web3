import React from 'react'
import { getRandomInt } from '../utils';

const Button = ({ changeCount, text, count, maxNumber=-1 }) => {
  const handleClick = (e) => {
    if(maxNumber !== -1){
      count = getRandomInt(maxNumber);
    }
    console.log(count+1);
    changeCount(count+1);
  }

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

export default Button