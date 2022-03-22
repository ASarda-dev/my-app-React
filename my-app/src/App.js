import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import { Button, Accordion, Alert, Nav } from "react-bootstrap";
// import { ReactComponent as ReactIcon } from "./assets/react.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const encenderApagar = () => {
    console.log("Comproba si funciona el boton");
  };
  return (
    <div className="App">
      <h1 class="p-5">React Bootstrap </h1>
      {/* <ReactIcon></ReactIcon> */}

      <header>
        <h3>El coche esta : Encendido </h3>
        <Button variant="success m-5" size="lg" onClick={encenderApagar}>
          Encender/Apagar
        </Button>
      </header>
    </div>
  );
}

export default App;
