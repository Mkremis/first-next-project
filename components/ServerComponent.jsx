import React from "react";
import Saludo from "./Saludo";

const ServerComponent = () => {
  return (
    <div style={{ border: "6px dotted blue" }}>
      <h2>Componente Server Side</h2>
      <Saludo />
    </div>
  );
};

export default ServerComponent;
