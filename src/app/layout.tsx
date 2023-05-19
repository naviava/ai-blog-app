import "./globals.css";
import { Raleway } from "next/font/google";

// Components.
import Navbar from "./(site)/components/layout/Navbar";
import Footer from "./(site)/components/layout/Footer";

const font = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Blog AI App",
  description: "Blogs written by AI",
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
