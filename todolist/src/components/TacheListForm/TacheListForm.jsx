import React, { useContext, useState } from 'react';
import TachesContext from "../../contexts/TachesContext";

const TacheListForm = ({ tache }) => {
  const [label, setLabel] = useState(tache.label);
  const [priority, setPriority] = useState(tache.priority);
  const [checked, setChecked] = useState(tache.state);

  const { betterSetTaches } = useContext(TachesContext);

  const handleCheckBoxChange = (event) => {
    setChecked(!checked);
    betterSetTaches(tache.id, label, event.target.checked, priority);
  };

  const handleLabelChange = (event) => {
    setLabel(event.target.value);
    betterSetTaches(tache.id, event.target.value, checked, priority);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
    betterSetTaches(tache.id, label, checked, event.target.value);
  };

  const handleOnSubmit = (event) => {
    // Delete
  };

  return (
    <form>
      <input type="text" value={label} onChange={handleLabelChange} />
      <select value={priority} onChange={handlePriorityChange}>
        <option>Haute</option>
        <option>Moyenne</option>
        <option>Basse</option>
      </select>
      <input type="checkbox" checked={checked} onChange={handleCheckBoxChange} />
      <button type="submit" onSubmit={handleOnSubmit}>Delete</button>
    </form>
  )
}

export default TacheListForm