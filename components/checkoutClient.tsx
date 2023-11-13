"use client";

import Image from "next/image";
import RemoveFromCart from "./button/removeFromCart";
import Qty from "./button/qty";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "axios";

interface CartClientProps {
  cart: {
    id: string;
    quantity: number;
    customerId: string;
    productId: string;
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
  }[];
}

const CheckoutClient = ({ cart }: CartClientProps) => {
  const param = useSearchParams();

  useEffect(() => {
    const isPaid = param.get("payment");

    if (isPaid === "cancelled") {
      axios
        .delete("/api/order")
        .then(() => toast.error("Checkout Failed"))
        .catch(() => toast.error("Something went wrong"))
        .finally(() => {});
    }
  }, []);

  return (
    <div className="checkout-client">
      <div className="body">
        {cart.map((item) => (
          <div key={item.id}>
            <Image
              src={item.product.imageUrl}
              width={80}
              height={60}
              alt={item.product.name}
            />
            <div className="name-remove">
              <p>{item.product.name}</p>
              <RemoveFromCart id={item.id} />
            </div>
            <div className="price-qty">
              <span>${item.product.price * item.quantity}</span>
              <div className="btn">
                <Qty qty={item.quantity} product={item.product} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CheckoutClient;
