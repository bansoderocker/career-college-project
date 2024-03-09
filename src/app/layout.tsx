"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "./css/common.css";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Guidance", href: "/Guidance" },
  { name: "Opportunities", href: "/Opportunities" },
  { name: "Contact", href: "/Contact" },
  { name: "Login", href: "/Login" },
  { name: "Registration", href: "/Registration" },
];

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();

  return (
    <html lang="en">
      <head>
        {/* <title>{metadata.title ?? ""}</title>
        <meta
          name={metadata.description ?? ""}
          content={metadata.description ?? ""}
        /> */}
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <div id="headerMenu" className="top_nav">
          
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className={link.href == pathName ? "active link" : "link"}
            >
              {link.name}
            </Link>
          ))}
        </div>
        {children}
      </body>
    </html>
  );
}
//export { metadata };
