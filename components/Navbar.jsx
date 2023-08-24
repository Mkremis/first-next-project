import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ flexBasis: "40%" }}>
      <ul
        style={{
          display: "flex",
          listStyle: "none",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/tienda"}>Tienda</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
