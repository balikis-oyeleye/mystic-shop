"use client";

import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface OrderProps {
  cart: {
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
    id: string;
    quantity: number;
    customerId: string;
    productId: string;
  }[];
}

const OrderSummary = ({ cart }: OrderProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const sumTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const onCheckout = async () => {
    setLoading(true);

    axios
      .post("api/checkout", cart)
      .then((response) => {
        window.location = response.data.url;
      })
      .catch((error) => {
        if (error.response.data === "Unauthorized")
          return router.push("/login");
        else return toast.error("Something went wrong");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="order-summary">
      <h4>Order Summary</h4>
      <hr />
      <div>
        <p>order total</p>
        <p>${sumTotal}</p>
      </div>
      <button className="btn-main" disabled={isLoading} onClick={onCheckout}>
        {isLoading ? (
          <Image src="/loader.gif" alt="loading" height={30} width={30} />
        ) : (
          <span>Checkout</span>
        )}
      </button>
    </div>
  );
};

export default OrderSummary;
