import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Ropa",
  description: "Categoria Ropa",
  keywords: "tienda, categoria, ropa",
};

export default function RopaLayout({ children }) {
  return (
    <>
      <nav
        style={{
          backgroundColor: "green",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>
          <Link href={"/tienda/categorias/ropa"}>Ropa</Link>
        </h3>
        <ul
          style={{
            flexBasis: "40%",
            display: "flex",
            listStyle: "none",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <li>
            <Link href={"/tienda/categorias/ropa/hombre"}>Hombre</Link>
          </li>
          <li>
            <Link href={"/tienda/categorias/ropa/mujer"}>Mujer</Link>
          </li>
          <li>
            <Link href={"/tienda/categorias/ropa/kids"}>Niño</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
