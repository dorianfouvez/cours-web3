import React, { useContext } from "react";
import TacheAddForm from "../TacheAddForm/TacheAddForm";
import Taches from "../Taches/Taches";
import TachesContext from "../../contexts/TachesContext";
import ButtonShowDoneList from "../ButtonShowDoneList/ButtonShowDoneList";

function App() {

  const { showDoneList } = useContext(TachesContext);

  return (
    <div>
      <Taches done={false} />
      <TacheAddForm />
      <ButtonShowDoneList />
      <Taches done={true} show={showDoneList} />
    </div>
  );
}

export default App;
