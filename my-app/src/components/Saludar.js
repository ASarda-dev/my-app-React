import React from "react";

export default function Saludar(props) {
  const { userInfo, saludarFn } = props;
  const { nombre = "Anonimo" } = userInfo;
  const { edad = "Anonimo" } = userInfo;

  return (
    <div>
      <button onClick={() => saludarFn(nombre, edad)}>Saludar</button>
    </div>
  );
}
