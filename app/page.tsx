import Products from "@/components/shop/products";
import { products } from "@/constants/random";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="home">
      <div className="hero">
        <Image src={"/hero.jpg"} fill alt="hero" priority />
      </div>
      <section>
        <h1>Our Products</h1>
        <Products products={products.slice(0, 8)} />
        <div className="see-more">
          <Link href="/shop" className="btn-secondary">
            See More
          </Link>
        </div>
      </section>
    </main>
  );
}
