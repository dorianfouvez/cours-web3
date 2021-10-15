import React from "react";
import Opinions from "../Opinions/Opinions";
import OpinionForm from "../OpinionForm/OpinionForm";

function App() {
  return (
    <div className="App">
      <Opinions />
      <OpinionForm />
      <br/>
      <br/>
      <footer><button>Light</button><button>Dark</button><button>Toggle</button></footer>
    </div>
  );
}

export default App;
