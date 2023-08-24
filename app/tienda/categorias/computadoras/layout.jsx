import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Computadoras",
  description: "Categoria Computadoras",
  keywords: "tienda, categorias, computadoras",
};

export default function ComputadorasLayout({ children }) {
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
          <Link href={"/tienda/categorias/computadoras"}>Computadoras</Link>
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
            <Link href={"/tienda/categorias/computadoras/laptop"}>Laptop</Link>
          </li>
          <li>
            <Link href={"/tienda/categorias/computadoras/pc"}>PC</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
