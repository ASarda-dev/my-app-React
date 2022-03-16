import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const enviarSaludo = (nombre) => {
    console.log("Hola " + nombre);
  };

  return (
    <div className="App">
      <h1>Mi primer Componente</h1>
      <Saludar nombre="Albert" apellidos="Sarda" enviarSaludo={enviarSaludo} />
      <Saludar nombre="Eva" apellidos="Garcia" enviarSaludo={enviarSaludo} />
    </div>
  );
}

export default App;
