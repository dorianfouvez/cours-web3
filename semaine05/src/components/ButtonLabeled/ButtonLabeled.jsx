import React from "react";
import Button from "../Button/Button";

function ButtonLabeled({label}) {
  let buttonText = `Increase ${label}`
  return (
    <li><span>{label} : 2 </span><Button text={buttonText} /></li>
  );
}

export default ButtonLabeled;