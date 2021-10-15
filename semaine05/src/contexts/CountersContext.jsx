import React, { useState } from "react";

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [good, setGood] = useState(0)
    const betterSetGood = (newValue) => {
        setGood(newValue)
    }
    
    const exposedValue = {
        good,
        betterSetGood,
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