"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const NoProductCart = () => {
  const param = useSearchParams();

  useEffect(() => {
    const isPaid = param.get("payment");

    if (isPaid === "success") {
      toast.success("Checkout Success");
    }
  }, []);
  return (
    <div className="no-cart__product">
      <p>Cart is Empty</p>
    </div>
  );
};

export default NoProductCart;
