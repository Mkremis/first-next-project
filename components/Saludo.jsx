"use client";

const Saludo = () => {
  return (
    <div style={{ border: "2px solid red", padding: "2rem" }}>
      <h2>Este es un componente use client</h2>
      <button onClick={() => alert("Hola!!")}>Saludo</button>
    </div>
  );
};

export default Saludo;
