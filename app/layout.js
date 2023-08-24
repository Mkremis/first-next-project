import Navbar from "../components/Navbar";
import Link from "next/link";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "Mi tienda con Next.js - Home Page",
  description: "Pagina de inicio de la tienda virtual",
  keywords: "homepage, inicio, tienda, virtual",
};
const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header
          style={{
            backgroundColor: "#202020",
            color: "#fff",
            padding: "1rem 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <h1>
              <Link href={"/"}>Next App</Link>
            </h1>
          </div>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
