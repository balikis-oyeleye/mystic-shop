"use client";

import React, { useEffect } from "react";
import { BsX } from "react-icons/bs";
import CartItem from "./cartItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { close } from "@/redux/features/cartModalSlice";
import Link from "next/link";

const Cart = () => {
  const arr = [1, 1, 1, 1, 1, 1];
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
          <p>Shopping Cart ({1}) </p>
          <BsX onClick={() => dispatch(close())} />
        </div>
        <div className="body">
          {arr.map((item, index) => (
            <CartItem key={index} />
          ))}
        </div>
        <Link href="/checkout" className="cta">
          <button className="btn-main">Check Out</button>
        </Link>
      </div>
    </aside>
  );
};

export default Cart;
