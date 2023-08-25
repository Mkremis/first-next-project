import Navbar from "../components/Navbar";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";

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
        <header className="main-header nav-bar">
          <div>
            <h1 className="text-3xl font-bold">
              <Link href={"/"}>Next App</Link>
            </h1>
          </div>
          <Navbar />
        </header>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </body>
    </html>
  );
}
