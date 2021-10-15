import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function ButtonLight() {
    const { setLightTheme } = useContext(ThemeContext)

    const handler = () => {
        setLightTheme();
    };

    return (
        <button onClick={handler}>Light</button>
    );
}

export default ButtonLight;