import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar py-5">
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/tienda"}>Tienda</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
        <li>
          <Link href={"/users"}>Usuarios</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
