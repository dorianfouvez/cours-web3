import React, { useState } from "react";
import App from "../App/App";
import Loading from "../Loading/Loading";

function AppLoader() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 3000);

    if(loading)
        return <Loading />;
    return <App />;
}

export default AppLoader