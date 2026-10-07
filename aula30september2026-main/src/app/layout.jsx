import "./globals.css";
import NavBar from "./components/NavBar";

export const metadata = {
  title: "aula30september2026",
  description: "Aula - 30 september 2026",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <NavBar />

        {children}
      </body>
    </html>
  );
}
