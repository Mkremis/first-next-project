"use client";

export default function getUser() {
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await fetch(`/api/users/${e.target.userId.value}`, {
        method: "DELETE",
      });

      res.status === 200 ? console.log(await res.json()) : console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Eliminar un usuario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Indique el userId:</label>
        <br />
        <input
          type="text"
          id="userId"
          name="userid"
          placeholder="userId"
          style={{ color: "blue" }}
        />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
