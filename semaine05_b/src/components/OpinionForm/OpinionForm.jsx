import React, { useContext } from "react";
import OpinionsContext from "../../contexts/OpinionsContext";

const PersonForm = () => {
    const { newOpinion, betterSetNewOpinion, addOpinion } = useContext(OpinionsContext);

    const handleOpinionChange = (event) => {
        betterSetNewOpinion(event.target.value);
    }

    const handleAddOpinion = (event) => {
        event.preventDefault();
    
        addOpinion();

        betterSetNewOpinion('');
    }

    return (
    <form onSubmit={handleAddOpinion}>
        <div><input value={newOpinion} onChange={handleOpinionChange} /></div>
        <div>
            <button type="submit">Add Opinion</button>
        </div>
    </form>
    )
}

export default PersonForm