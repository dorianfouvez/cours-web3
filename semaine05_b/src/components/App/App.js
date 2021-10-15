import React, { useContext } from "react";
import Opinions from "../Opinions/Opinions";
import OpinionForm from "../OpinionForm/OpinionForm";
import ButtonLight from "../Button/ButtonLight";
import ButtonDark from "../Button/ButtonDark";
import ButtonToggle from "../Button/ButtonToggle";
import ThemeContext from "../../contexts/ThemeContext";

function App() {
  const { getCurrentThemeDetails } = useContext(ThemeContext);

  const currentTheme = getCurrentThemeDetails();

  return (
    <div className="App" style={{backgroundColor: currentTheme.backgroundColor, color: currentTheme.primaryTextColor}}>
      <Opinions />
      <OpinionForm />
      <br/>Hello World
      <br/>
      <footer><ButtonLight /><ButtonDark /><ButtonToggle /></footer>
    </div>
  );
}

export default App;
