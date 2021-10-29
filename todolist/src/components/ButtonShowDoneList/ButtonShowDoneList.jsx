import React, { useContext } from "react";
import TachesContext from "../../contexts/TachesContext";

const ButtonShowDoneList = () => {
    const { showDoneList, setShowDoneList } = useContext(TachesContext);

    const toggle = () => {
        setShowDoneList(!showDoneList);
    }

    return (
        <button onClick={toggle}>{showDoneList ? "cacher les les tâches finies" : "afficher les tâches finies"}</button>
    )
}

export default ButtonShowDoneList