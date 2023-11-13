"use client";

import { useEffect } from "react";
import { BsX } from "react-icons/bs";
import CartItem from "./cartItem";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { close } from "@/redux/features/cartModalSlice";
import { useRouter } from "next/navigation";

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
  customer: string | undefined;
}

const CartClient = ({ cart, customer }: CartClientProps) => {
  const isOpen = useAppSelector((state) => state.cartModalReducer.isOpen);
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    if (isOpen === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isOpen]);

  const sumTotal = cart.reduce((sum, item) => sum + item.quantity, 0);

  const checkout = () => {
    if (!customer) {
      router.push("/login");
      dispatch(close());
    }
    router.push("/checkout");
    dispatch(close());
  };

  return (
    <aside className={`cart-modal ${isOpen ? "active-cm" : "inactive-cm"}`}>
      <div>
        <div className="head">
          <p>Shopping Cart ({sumTotal}) </p>
          <BsX onClick={() => dispatch(close())} />
        </div>
        {cart.length < 1 ? (
          <div className="empty-cart">
            <p>No Product In cart</p>
          </div>
        ) : (
          <>
            <div className="body">
              {cart.map((item, index) => (
                <CartItem
                  key={index}
                  product={item.product}
                  quantity={item.quantity}
                  id={item.id}
                />
              ))}
            </div>
            <button className="btn-main" onClick={checkout}>
              Check out
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default CartClient;
