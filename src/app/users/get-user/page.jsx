"use client";

import { useRouter } from "next/navigation";

export default function getUser() {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/users/get-user/${e.target.userid.value}`)
  };
  return (
    <div>
      <h1>Obtener datos de un usuario</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userId">Indique el userId:</label>
        <br/>
        <input type="text" id="userId" name="userid" placeholder="userId" style={{color:"blue"}} />
        <br/>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
