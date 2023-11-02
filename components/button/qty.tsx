"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsDash, BsPlus } from "react-icons/bs";

interface QtyProps {
  qty: number;
  product: ProductType;
}

const Qty = ({ qty, product }: QtyProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const increaseQty = () => {
    setIsLoading(true);

    axios
      .post("/api/cart/increaseQty", product)
      .then((error) => {
        toast.success("Product added to cart");
        route.refresh();
      })
      .catch((error) => {
        toast.error("Add Product to Cart First");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  const decreaseQty = () => {
    if (qty <= 1) return;

    setIsLoading(true);

    axios
      .post("/api/cart/decreaseQty", product)
      .then((error) => {
        toast.success("Product removed from cart");
        route.refresh();
      })
      .catch((error) => {
        toast.error("Error");
        console.log(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      <button disabled={isLoading || qty == 1} onClick={decreaseQty}>
        <BsDash />
      </button>
      <span>
        {isLoading ? (
          <Image src="/loader2.gif" alt="Loading" width={20} height={20} />
        ) : (
          qty
        )}
      </span>
      <button disabled={isLoading} onClick={increaseQty}>
        <BsPlus />
      </button>
    </>
  );
};

export default Qty;
