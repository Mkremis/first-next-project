export default async function getUsers() {
  const res = await fetch(`https://9rdz68-3000.csb.app/api/users`);
  const users = await res.json();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1rem",
        margin: "1rem",
      }}
    >
      {users.map((user) => (
        <div key={user.id} style={{ padding: "6px", border: "2px solid gray" }}>
          <h3>
            {user.id} {user.name}
          </h3>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      ))}
    </div>
  );
}
