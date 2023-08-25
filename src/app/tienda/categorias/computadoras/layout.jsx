import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Computadoras",
  description: "Categoria Computadoras",
  keywords: "tienda, categorias, computadoras",
};

export default function ComputadorasLayout({ children }) {
  return (
    <>
      <nav clasName="nav-bar">
        <h3>
          <Link href={"/tienda/categorias/computadoras"}>Computadoras</Link>
        </h3>
        <ul>
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
