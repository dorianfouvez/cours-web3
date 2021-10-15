import React from "react";
import ButtonBad from "../Button/ButtonBad";
import ButtonGood from "../Button/ButtonGood";
import ButtonOk from "../Button/ButtonOk";
import ButtonResetScore from "../Button/ButtonResetScore";

function App() {
  return (
    <div className="App">
      <ul>
        <ButtonGood />
        <ButtonOk />
        <ButtonBad />
      </ul>
      <ButtonResetScore />
    </div>
  );
}

export default App;