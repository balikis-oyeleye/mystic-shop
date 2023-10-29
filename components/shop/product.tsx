"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

interface ProductProps {
  product: {
    id: string;
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
    status: string;
    imageUrl: string;
    sellerId: string;
  };
}

const Product = ({ product }: ProductProps) => {
  const addToCart = () => {
    axios
      .post("/api/addToCart", product)
      .then((error) => {
        console.log(error);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
      })
      .finally(() => console.log("Done"));
  };

  return (
    <div className="product">
      <div className="product-img">
        <Link href={`/shop/${product.id}`}>
          <div>
            <Image src={product.imageUrl} fill alt={product.name} />
          </div>
        </Link>
      </div>
      <div className="product-name">
        <Link href={`/shop/${product.id}`}>{product.name}</Link>
      </div>
      <div className="product-price">
        <span>${product.price}</span>
      </div>
      {true ? (
        <button className="btn-secondary" onClick={addToCart}>
          Add to Cart
        </button>
      ) : (
        <button className="btn-secondary">Remove</button>
      )}
    </div>
  );
};

export default Product;
