import Link from "next/link";
export default function UsersPage() {
  return (
    <div>
      <h3>Pagina de usuarios. Seleccione una accion:</h3>
      <ul>
        <li>
          <Link href="/users/get-users">Obtener todos los usuarios</Link>
        </li>
        <li>
          <Link href="/users/get-user">Obtener un usuario</Link>
        </li>
        <li>
          <Link href="/users/create-user">Crear un usuario</Link>
        </li>
        <li>
          <Link href="/users/update-user">Actualizar un usuario</Link>
        </li>
        <li>
          <Link href="/users/delete-user">Eliminar un usuario</Link>
        </li>
      </ul>
    </div>
  );
}
