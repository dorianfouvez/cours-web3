import React, { useState } from "react";

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([])
    const [newOpinion, setNewOpinion] = useState('')

    const addOpinion = () => {
        //Verificatoin pas double nom
        if(opinions.find(opinion => opinion.label.toLowerCase() === newOpinion.toLowerCase())){
            window.alert(`${newOpinion} is already added to the list`);
            return;
        }
      
        //Creation de l'opinion
        const opinionObject = {
            label: newOpinion,
            votes: 1,
        };
        
        //SET = rerender avec une copie
        setOpinions(opinions.concat(opinionObject)); //setOpinions([...opinions, opinionObject])
    }

    const betterSetNewOpinion = (newValue) => {
        setNewOpinion(newValue);
    }

    const setVotes = (opinionLabel) => {
        let indexOpinionToUpdate = opinions.findIndex(opinion => opinion.label === opinionLabel);
        let opinionToUpdate = opinions[indexOpinionToUpdate];
        opinionToUpdate.votes++;

        let opinionsCopy = [...opinions];
        opinionsCopy[indexOpinionToUpdate] = opinionToUpdate;

        setOpinions(opinionsCopy);
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