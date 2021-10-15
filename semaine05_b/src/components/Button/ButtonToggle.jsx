import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function ButtonToggle() {
    const { toggleTheme } = useContext(ThemeContext)

    const handler = () => {
        toggleTheme();
    };

    return (
        <button onClick={handler}>Toggle</button>
    );
}

export default ButtonToggle;