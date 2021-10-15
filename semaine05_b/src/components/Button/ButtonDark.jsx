import React, { useContext } from "react";
import ThemeContext from "../../contexts/ThemeContext";

function ButtonDark() {
    const { setDarkTheme } = useContext(ThemeContext)

    const handler = () => {
        setDarkTheme();
    };

    return (
        <button onClick={handler}>Dark</button>
    );
}

export default ButtonDark;