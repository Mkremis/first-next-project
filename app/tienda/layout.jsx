import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Tienda",
  description: "Tienda de Ropa y Computadoras",
};

export default function TiendaLayout({ children }) {
  return (
    <>
      <nav className="nav-bar">
        <h3>
          <Link href={"/tienda"}>Tienda</Link>
        </h3>
        <ul>
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
