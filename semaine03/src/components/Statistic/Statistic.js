import React from 'react'

const Display = ({ text, counter, signe="" }) => <><td>{text}</td><td>{counter}{" " + signe}</td></>;

export default Display