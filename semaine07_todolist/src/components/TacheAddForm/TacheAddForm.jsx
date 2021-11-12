import React, { useContext } from "react";
import TachesContext from "../../contexts/TachesContext";

const TacheAddForm = () => {
    const { newTache, betterSetNewTache, addTache } = useContext(TachesContext);

    const handleTacheChange = (event) => {
        betterSetNewTache(event.target.value);
    }

    const handleAddTache = (event) => {
        event.preventDefault();
    
        addTache();

        betterSetNewTache('');
    }

    return (
    <form onSubmit={handleAddTache}>
        <div><input value={newTache} onChange={handleTacheChange} /></div>
        <div>
            <button type="submit">Ajouter</button>
        </div>
    </form>
    )
}

export default TacheAddForm