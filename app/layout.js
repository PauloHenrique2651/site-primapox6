import localFont from "next/font/local";
import "./globals.css";

const archivo = localFont({
  src: [
    { path: "../public/fonts/archivo-latin-wdth-normal.woff2", weight: "100 900", style: "normal" },
    { path: "../public/fonts/archivo-latin-ext-wdth-normal.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-archivo",
  display: "swap",
});

export const metadata = {
  title: "Primapox | Pintura eletrostática com tinta em pó",
  description:
    "Primapox: pintura eletrostática com tinta em pó desde 1985, em Vigário Geral, Rio de Janeiro. Se é metal, Primapox pinta e protege!",
};

export const viewport = { themeColor: "#f5f4f0" };

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={archivo.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
