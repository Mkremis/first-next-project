import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Tienda",
  description: "Tienda de Ropa y Computadoras",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav
        style={{
          backgroundColor: "pink",
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <h3>
          <Link href={"/tienda"}>Tienda</Link>
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
            <Link href={"/tienda/categorias"}>Categorias</Link>
          </li>
          <li>
            <Link href={"/tienda/productos"}>Productos</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
