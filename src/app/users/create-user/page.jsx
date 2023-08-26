"use client";

export default async function createUser() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const res = await fetch(`http://localhost:3000/api/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div className="container">
      <h1>Crear un usuario</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre completo:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          style={{ color: "blue" }}
        />
        <br />
        <label htmlFor="userId">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          style={{ color: "blue" }}
        />
        <br />
        <label htmlFor="userId">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          style={{ color: "blue" }}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
