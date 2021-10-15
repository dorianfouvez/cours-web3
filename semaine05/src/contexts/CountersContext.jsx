import React, { useState } from "react";

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [good, setGood] = useState(0)
    const [ok, setOk] = useState(0)
    const [bad, setBad] = useState(0)

    const betterSetGood = (newValue) => {
        setGood(newValue)
    }

    const betterSetOk = (newValue) => {
        setOk(newValue)
    }

    const betterSetBad = (newValue) => {
        setBad(newValue)
    }

    const resetScore = () => {
        setGood(0)
        setOk(0)
        setBad(0)
    }
    
    const exposedValue = {
        good,
        betterSetGood,
        ok,
        betterSetOk,
        bad,
        betterSetBad,
        resetScore,
    }
    
    return <Context.Provider value={exposedValue}>
        { props.children }
    </Context.Provider>
}
    
export {
    Context,
    ProviderWrapper,
}
    
export default Context;