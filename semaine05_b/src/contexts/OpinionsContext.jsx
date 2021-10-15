import React, { useState } from "react";

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([])
    const [newOpinion, setNewOpinion] = useState('')

    const addOpinion = () => {
        if(opinions.find(opinion => opinion.label.toLowerCase() === newOpinion.toLowerCase())){
            window.alert(`${newOpinion} is already added to the list`);
            return;
        }
      
        const opinionObject = {
            label: newOpinion,
            votes: 1,
        };
        
        setOpinions(opinions.concat(opinionObject));
    }

    const betterSetNewOpinion = (newValue) => {
        setNewOpinion(newValue);
    }

    const setVotes = (opinionLabel) => {
        let opinionUpdated = opinions.find(opinion => opinion.label === opinionLabel);

        setOpinions([...opinions, opinionUpdated]);
    }
    
    const exposedValue = {
        opinions,
        addOpinion,
        newOpinion,
        betterSetNewOpinion,
        setVotes,
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