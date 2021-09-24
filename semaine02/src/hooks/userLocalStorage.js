import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    // Better Getter.
    let valueStored = localStorage.getItem(key);
    if(valueStored == null){
        localStorage.setItem(key, JSON.stringify(initialValue));
    }

    const [ counter, setBasicCounter ] = useState(JSON.parse(valueStored));

    // Better Setter.
    const betterSetter = (value) => {
        localStorage.setItem(key, JSON.stringify(value));
        return setBasicCounter(value);
    }

    return [ counter, betterSetter ];
}

export default useLocalStorage