import { getProducts } from "@/actions/getProducts";
import Products from "@/components/shop/products";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="home">
      <div className="hero">
        <Image src={"/hero.jpg"} fill alt="hero" priority />
        <div className="hero-text">
          <span>
            Explore <br /> Our Collections
          </span>
        </div>
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
