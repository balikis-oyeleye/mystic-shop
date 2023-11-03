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
      .then((error) => {
        route.refresh();
        toast.success("Product added to cart");
        console.log(error);
      })
      .catch((error) => {
        toast.error("Something went wrong");
        console.log(error);
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
