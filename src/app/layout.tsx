import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Certifique-se de que os caminhos para as fontes estão corretos
const geistSans = localFont({
  src: "/fonts/GeistVF.woff",  // Caminho correto para a pasta public
  variable: "--font-geist-sans",
  weight: "200 800",
});

const geistMono = localFont({
  src: "/fonts/GeistMonoVF.woff",  // Caminho correto para a pasta public
  variable: "--font-geist-mono",
  weight: "200 800",
});

export const metadata: Metadata = {
  title: {
    default:'Next Tutorial | Kewa Code',
    template:'%s| Kewa',
  },
  description: "Aplicativo gerado pelo Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header style={{ padding: "15px", background: "#f5f5f5" }}>
          <h1>Cabeçalho da aplicação</h1>
        </header>
        <main>{children}</main>
        <footer style={{ padding: "15px", background: "#f5f5f5" }}>
          <p>Rodapé da aplicação</p>
        </footer>
      </body>
    </html>
  );
}
