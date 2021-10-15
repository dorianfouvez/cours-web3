import React from "react";
import Button from "../Button/Button";
import ButtonLabeled from "../ButtonLabeled/ButtonLabeled";

function App() {
  return (
    <div className="App">
      <ul>
        <ButtonLabeled label='Good' />
        <ButtonLabeled label='Ok' />
        <ButtonLabeled label='Bad' />
      </ul>
      <Button text='Reset Score'/>
    </div>
  );
}

export default App;