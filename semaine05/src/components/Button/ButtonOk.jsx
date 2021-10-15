import React, { useContext } from "react";
import CountersContext from "../../contexts/CountersContext";

function ButtonOk({label}) {
    const { ok, betterSetOk } = useContext(CountersContext)

    const handler = () => {
        betterSetOk(ok+1);
    };

    return (
        <li><span>Ok : {ok} </span><button onClick={handler} >Increase Ok</button></li>
    );
}

export default ButtonOk;