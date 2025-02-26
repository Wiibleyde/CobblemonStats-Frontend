import { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar/Navbar";

// Metadata
export const metadata: Metadata = {
  title: "Wiibleyde - Cobblemon Stats",
  description: "Cobblemon Stats",
  authors: [{
    name: "Wiibleyde",
    url: "https://nathan.bonnell.fr",
  },
  {
    name: "JusteKal",
    url: "https://github.com/JusteKal/",
  }],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="mt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
