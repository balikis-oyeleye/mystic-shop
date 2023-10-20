import Products from "@/components/shop/products";
import { products } from "@/constants/random";
import React from "react";

const Shop = () => {
  return (
    <main className="shop">
      <h1>Shop</h1>
      <section>
        <Products products={products} />
      </section>
    </main>
  );
};

export default Shop;
