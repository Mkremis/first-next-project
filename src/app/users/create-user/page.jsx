"use client";

export default async function createUser() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());
    console.log(userData);
    const res = await fetch(`https://9rdz68-3001.csb.app/api/users`, {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    const data = await res.json();
    alert(data.message);
  };
  return (
    <div>
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
