import Link from "next/link";

export const metadata = {
  title: "Mi tienda con Next.js - Productos",
  description: "Productos de la Tienda de Ropa y Computadoras",
  keywords: "tienda, ropa, computadoras, productos",
};

export default function ProductosLayout({ children }) {
  return (
    <>
      <nav>
        <h3>
          <Link href={"/tienda/productos"}>Productos</Link>
        </h3>
      </nav>
      {children}
    </>
  );
}
