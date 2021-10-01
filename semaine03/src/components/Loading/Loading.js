import React, { useState } from "react";
import App from "../App/App";

function Loading() {
    const [loading, setLoading] = useState(true);

    setTimeout(() => setLoading(false), 3000);

    if(loading)
        return <div>Loading ...</div>;
    return <App />;
}

export default Loading