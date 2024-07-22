import "./App.css";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  function Inputhandle(event) {
    setName(event.target.value);
  }
  return (
    <div>
      <input value={name} type="text" onChange={Inputhandle} />
      <h1>Enter name : {name}</h1>
    </div>
  );
}

export default App;
