import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
// import { Button, Accordion, Alert, Nav } from "react-bootstrap";
// import { ReactComponent as ReactIcon } from "./assets/react.svg";
import "./App.css";

function App() {
  const [stateCar, setStateCar] = useState(false);
  const [contar, setContar] = useState(0);

  useEffect(() => {
    console.log("Total : " + contar);
  }, [contar]);
  const encenderApagar = () => {
    // console.log("Comproba si funciona el boton");
    // setStateCar(!stateCar);
    setStateCar((prevValue) => !prevValue);
    setContar(contar + 1);
  };
  return (
    <div className="App">
      <h1 class="p-5">React Bootstrap </h1>
      {/* <ReactIcon></ReactIcon> */}

      <header>
        <h3>El coche esta : {stateCar ? "Encendido" : " Apagado"} </h3>
        <h4>Clicks : {contar}</h4>
        <Button variant="success m-5" size="lg" onClick={encenderApagar}>
          Encender/Apagar
        </Button>
      </header>
    </div>
  );
}

export default App;
