import Navbar from "@/components/general/navbar";
import Sidebar from "@/components/general/sidebar";
import "@/styles/base/reset.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/redux/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mystic Shop",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: ChildrenTypes) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <Sidebar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
