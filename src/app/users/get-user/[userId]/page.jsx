export default async function getUser({ params }) {
  const { userId } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/users/${userId}`
  );
  const user = await res.json();
  return (
    <div style={{ padding: "6px", border: "2px solid gray" }}>
      <h3>
        {user.id} {user.name}
      </h3>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
}
