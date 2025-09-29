// app/layout.js
import "./globals.css";
import Navabar from "./components/Navabar";

export const metadata = {
  title: "My Portfolio",
  description: "Developer Portfolio built with Next.js",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Navabar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
