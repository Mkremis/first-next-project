"use client";

export default async function updateUser() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData.entries());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userData.userId}`,
      {
        method: "PUT",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
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
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          style={{ color: "blue" }}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          style={{ color: "blue" }}
        />
        <br />
        <label htmlFor="userId">User Id:</label>
        <input
          type="text"
          id="userId"
          name="userId"
          placeholder="userId"
          style={{ color: "blue" }}
        />
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
