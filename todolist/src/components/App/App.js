import React, { useContext, useEffect } from "react";
import TacheAddForm from "../TacheAddForm/TacheAddForm";
import Taches from "../Taches/Taches";
import TachesContext from "../../contexts/TachesContext";

function App() {

  const { initialLoad } = useContext(TachesContext);
  useEffect(() => initialLoad(), []);

  return (
    <div>
      <Taches />
      <TacheAddForm />
    </div>
  );
}

export default App;
