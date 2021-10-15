import React, { useContext } from "react";
import CountersContext from "../../contexts/CountersContext";

function ButtonBad() {
    const { bad, betterSetBad } = useContext(CountersContext)

    const handler = () => {
        betterSetBad(bad+1);
    };

    return (
        <li><span>Bad : {bad} </span><button onClick={handler} >Increase Bad</button></li>
    );
}

export default ButtonBad;