import Products from "@/components/shop/products";
import { products } from "@/constants/random";
import React from "react";

const Wishlist = () => {
  return (
    <main className="wishlist">
      <h1>Wishlist</h1>
      <section>
        <Products products={products} />
      </section>
    </main>
  );
};

export default Wishlist;
