import React from "react";
import Product from "./product";

interface ProductsProps {
  products: {
    id: number;
    name: string;
    price: number;
    image_link: string;
  }[];
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
