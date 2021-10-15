import React, { useState } from "react";

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [theme, setTheme] = useState({ backgroundColor: 'white', primaryTextColor: 'dark', secondaryTextColor: 'gray', linkColor: 'blue' })

    const setDarkTheme = () => {
        const darkTheme = { 
            backgroundColor: 'dark', 
            primaryTextColor: 'white', 
            secondaryTextColor: 'gray', 
            linkColor: 'red' 
        };
        
        setTheme(darkTheme);
    };

    const setLightTheme = () => {
        const lightTheme = { 
            backgroundColor: 'white', 
            primaryTextColor: 'dark', 
            secondaryTextColor: 'gray', 
            linkColor: 'blue' 
        };
        
        setTheme(lightTheme);
    };

    const toggleTheme = () => {
        if(theme.backgroundColor === 'white'){
            setDarkTheme()
        }else{
            setLightTheme();
        }
    };

    const getCurrentThemeDetails = () => {
        return theme;
    };
    
    const exposedValue = {
        setDarkTheme,
        setLightTheme,
        toggleTheme,
        getCurrentThemeDetails,
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