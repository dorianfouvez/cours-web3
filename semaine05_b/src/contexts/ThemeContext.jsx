import React, { useState } from "react";

const Context = React.createContext(null)
   
const ProviderWrapper = (props) => {

    const [theme, setTheme] = useState({ backgroundColor: 'white', primaryTextColor: 'dark', secondaryTextColor: 'gray', linkColor: 'blue' })

    const setDarkTheme = () => {
        const darkTheme = { 
            backgroundColor: '#000000', 
            primaryTextColor: '#ffffff', 
            secondaryTextColor: 'gray', 
            linkColor: 'red' 
        };
        
        setTheme(darkTheme);
    };

    const setLightTheme = () => {
        const lightTheme = { 
            backgroundColor: '#ffffff', 
            primaryTextColor: '#000000', 
            secondaryTextColor: 'gray', 
            linkColor: 'blue' 
        };
        
        setTheme(lightTheme);
    };

    const toggleTheme = () => {
        if(theme.backgroundColor === '#ffffff'){
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