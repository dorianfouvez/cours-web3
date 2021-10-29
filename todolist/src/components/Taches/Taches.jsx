import React, { useContext } from "react";
import TachesContext from "../../contexts/TachesContext";
import TacheListForm from "../TacheListForm/TacheListForm";

const Taches = ({ done }) => {
  const { taches } = useContext(TachesContext);

  let filteredTaches = taches.sort((a,b) => {
    const priorityMap = { "Haute": 1, "Moyenne": 2, "Basse": 3 };
    return priorityMap[a.priority] - priorityMap[b.priority];
  });

  if(taches.length < 1){
    return <div>Aucune tâche dans la liste, veuillez en ajouter une grâce au formulaire ci-dessous.</div>
  } else {
      return (
        <ul>{filteredTaches.map(tache => { if(tache.state === done) return <li key={tache.id}><TacheListForm tache={tache} /></li> })}</ul>
      )
  }
}

export default Taches