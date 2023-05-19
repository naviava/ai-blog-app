import "./globals.css";
import { Raleway } from "next/font/google";

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
      <body className={font.className}>{children}</body>
    </html>
  );
}
