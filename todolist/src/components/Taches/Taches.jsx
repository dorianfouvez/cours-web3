import React, { useContext } from "react";
import TachesContext from "../../contexts/TachesContext";
import TacheListForm from "../TacheListForm/TacheListForm";

const Taches = () => {
  const { taches } = useContext(TachesContext);

  //let filteredTaches = opinions.sort((a,b) => b.votes - a.votes);

  if(taches.length < 1){
    return <div>Aucune tâche dans la liste, veuillez en ajouter une grâce au formulaire ci-dessous.</div>
  } else {
      return (
        <ul>{taches.map(tache => <li key={tache.id}><TacheListForm tache={tache} /></li> )}</ul>
      )
  }
}

export default Taches