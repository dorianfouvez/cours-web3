import React from "react";
import Opinions from "../Opinions/Opinions";
import OpinionForm from "../OpinionForm/OpinionForm";
import ButtonLight from "../Button/ButtonLight";
import ButtonDark from "../Button/ButtonDark";
import ButtonToggle from "../Button/ButtonToggle";

function App() {
  return (
    <div className="App">
      <Opinions />
      <OpinionForm />
      <br/>
      <br/>
      <footer><ButtonLight /><ButtonDark /><ButtonToggle /></footer>
    </div>
  );
}

export default App;
