"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCart from "../button/addToCart";

interface ProductProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    status: string;
    imageUrl: string;
    sellerId: string;
  };
}

const Product = ({ product }: ProductProps) => {
  return (
    <div className="product">
      <div className="product-img">
        <Link href={`/shop/${product.id}`}>
          <div>
            <Image
              src={product.imageUrl}
              fill
              alt={product.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        </Link>
      </div>
      <div className="product-name">
        <Link href={`/shop/${product.id}`}>{product.name}</Link>
      </div>
      <div className="product-price">
        <span>${product.price}</span>
      </div>

      <AddToCart product={product} className="btn-secondary" />
    </div>
  );
};

export default Product;
