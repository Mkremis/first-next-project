import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Categorias",
  description: "Categorias de la Tienda de Ropa y Computadoras",
  keywords: "categorias, tienda, ropa, computadoras, virtual",
};

export default function CategoriasLayout({ children }) {
  return (
    <>
      <nav className="nav-bar">
        <h3>
          <Link href={"/tienda/categorias"}>Categorias</Link>
        </h3>
        <ul>
          <li>
            <Link href={"/tienda/categorias/computadoras"}>Computadoras</Link>
          </li>
          <li>
            <Link href={"/tienda/categorias/ropa"}>Ropa</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  );
}
