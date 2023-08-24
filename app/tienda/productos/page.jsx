import Link from "next/link";

const Productos = async () => {
  const fetchProducts = await fetch(
    "https://jsonplaceholder.typicode.com/albums"
  );
  const products = await fetchProducts.json();
  return (
    <>
      <p>Los mejores productos en nuestra tienda virtual.</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={"#"}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Productos;
