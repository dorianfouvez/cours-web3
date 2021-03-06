import React, { useState, useEffect, useCallback } from "react";
import tacheService from '../services/TacheService';
import debounce from 'lodash.debounce';

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [ taches, setTaches ] = useState([]);
    const [ newTache, setNewTache ] = useState(""); // Dans le form
    const [ showDoneList, setShowDoneList ] = useState(false);

    const initialLoad = () => {
        tacheService.getAll()
          .then(initList => {
            setTaches(initList);
        });
    }
    useEffect(() => initialLoad(), []);

    const addTache = () => {
        //Verificatoin pas double nom
        if(taches.find(tache => tache.label.toLowerCase() === newTache.toLowerCase())){
            window.alert(`${newTache} is already in the list`);
            return;
        }
      
        //Creation de la tache
        let index = 0;
        if(taches.length > 0){
            index = taches[taches.length - 1].index +1;
        }

        const tacheObject = {
            id: index,
            label: newTache,
            state: false,
            priority: "Basse",
        };
        
        //SET = rerender avec une copie
        setTaches(taches.concat(tacheObject)); //setTaches([...taches, tacheObject])

        // Inscription dans la db.
        tacheService.create(tacheObject)
            .then(newTache => {
                setTaches(taches.concat(newTache));
        });
    }

    const betterSetNewTache = (newValue) => {
        setNewTache(newValue);
    }

    const betterSetTaches = (id, tacheLabel, tacheState, tachePriority) => {
        let indexTacheToUpdate = taches.findIndex(tache => tache.id === id);
        let tacheInitial = taches[indexTacheToUpdate];

        let tacheToUpdate = {...tacheInitial};

        // Modifications
        tacheToUpdate.label = tacheLabel;
        tacheToUpdate.state = tacheState;
        tacheToUpdate.priority = tachePriority;

        // Update de la db.
        tacheService.update(tacheToUpdate)
        .then(newTache => {
            let tachesCopy = [...taches];
            tachesCopy[indexTacheToUpdate] = newTache;
            setTaches(tachesCopy);
        });
    }

    const debounceBetterSetTaches = useCallback(
        debounce((id, tacheLabel, tacheState, tachePriority) => 
            betterSetTaches(id, tacheLabel, tacheState, tachePriority), 
        300), 
    [taches]);

    const deleteTache = (id) => {
        let indexTacheToDelete = taches.findIndex(tache => tache.id === id);
        let tachesCopy = [...taches];
        tachesCopy.splice(indexTacheToDelete, 1);

        // Delete de la db.
        tacheService.Delete(id)
            .then(() => {
                setTaches(tachesCopy);
        });
    }
    
    const exposedValue = {
        initialLoad,
        taches,
        setTaches,
        betterSetTaches,
        debounceBetterSetTaches,
        addTache,
        newTache,
        betterSetNewTache, // Debounce a retourner
        deleteTache,
        showDoneList,
        setShowDoneList,
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