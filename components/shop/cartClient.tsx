"use client";

import { useEffect } from "react";
import { BsX } from "react-icons/bs";
import CartItem from "./cartItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { close } from "@/redux/features/cartModalSlice";
import Link from "next/link";

interface CartClientProps {
  cart: {
    id: string;
    product: any;
    customerId: string;
    quantity: number;
  }[];
}

const CartClient = ({ cart }: CartClientProps) => {
  const isOpen = useAppSelector((state) => state.cartModalReducer.isOpen);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  return (
    <aside className={`cart-modal ${isOpen ? "active-cm" : "inactive-cm"}`}>
      <div>
        <div className="head">
          <p>Shopping Cart ({cart.length}) </p>
          <BsX onClick={() => dispatch(close())} />
        </div>
        <div className="body">
          {cart.map((item, index) => (
            <CartItem key={index} product={item} />
          ))}
        </div>
        <Link href="/checkout" className="cta">
          <button className="btn-main">Check Out</button>
        </Link>
      </div>
    </aside>
  );
};

export default CartClient;
