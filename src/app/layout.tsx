import "./globals.css";
import { Raleway } from "next/font/google";

// Components.
import Navbar from "./(site)/components/layout/Navbar";
import Footer from "./(site)/components/layout/Footer";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Blog of the Future",
  description: "Blog of the Future is a blog about the future.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
