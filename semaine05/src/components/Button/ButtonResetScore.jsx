import React, { useContext } from "react";
import CountersContext from "../../contexts/CountersContext";

function ButtonResetScore() {
    const { resetScore } = useContext(CountersContext)

    const handler = () => {
        resetScore();
    };

    return (
        <button onClick={handler} >Reset Score</button>
    );
}

export default ButtonResetScore;