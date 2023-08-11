import { Navmenu } from "@/components/navmenu/navmenu";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raccoon",
  description: "Personal Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="pwebpage">
          <div className="pwebpage__layout">
            <div className="pwebpage__layout__main">{children}</div>
            <div className="pwebpage__layout__navbar">
              <Navmenu />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
