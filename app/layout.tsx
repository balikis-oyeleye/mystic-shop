import Navbar from "@/components/general/navbar";
import Sidebar from "@/components/general/sidebar";
import "@/styles/base/reset.scss";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "@/redux/provider";
import Footer from "@/components/general/footer";
import Cart from "@/components/shop/cart";
import ContactModal from "@/components/modal/contactModal";
import { Toaster } from "react-hot-toast";
import getCustomer from "@/actions/getCustomer";
import { getCart } from "@/actions/getCart";
import { siteMetadata } from "@/utils/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.socialBanner],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default async function RootLayout({ children }: ChildrenTypes) {
  const customer = await getCustomer();
  const cart = await getCart();

  const sumTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        <Providers>
          <Navbar customer={customer} cart={sumTotal} />
          <Sidebar />
          <Cart />
          <ContactModal />
          <Toaster />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
