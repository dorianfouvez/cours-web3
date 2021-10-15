import React, { useContext } from "react";
import CountersContext from "../../contexts/CountersContext";

function ButtonGood({label}) {
    const { good, betterSetGood } = useContext(CountersContext)

    const handler = () => {
        betterSetGood(good+1);
    };

    return (
        <li><span>Good : {good} </span><button onClick={handler} >Increase Good</button></li>
    );
}

export default ButtonGood;