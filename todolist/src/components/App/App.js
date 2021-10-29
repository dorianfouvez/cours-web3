import React, { useContext, useEffect } from "react";
import TacheAddForm from "../TacheAddForm/TacheAddForm";
import Taches from "../Taches/Taches";
import TachesContext from "../../contexts/TachesContext";

function App() {

  const { initialLoad } = useContext(TachesContext);
  useEffect(() => initialLoad(), []);

  return (
    <div>
      <Taches done={false} />
      <TacheAddForm />
      <Taches done={true} />
    </div>
  );
}

export default App;
