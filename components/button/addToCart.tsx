"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

const AddToCart = ({
  product,
  className,
}: {
  product: ProductType;
  className: string;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const route = useRouter();

  const addToCart = () => {
    setIsLoading(true);
    axios
      .post("/api/cart/add", product)
      .then(() => {
        route.refresh();
        toast.success("Product added to cart");
      })
      .catch((error) => {
        toast.error("Something went wrong");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <button
      className={className}
      disabled={isLoading}
      onClick={() => addToCart()}
    >
      {isLoading ? (
        <Image src="/loader2.gif" height={20} width={20} alt="Loading" />
      ) : (
        "Add to Cart"
      )}
    </button>
  );
};

export default AddToCart;
