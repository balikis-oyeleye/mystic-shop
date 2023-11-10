import { getCart } from "@/actions/getCart";
import CheckoutClient from "@/components/checkoutClient";
import NoProductCart from "@/components/noProductCart";
import OrderSummary from "@/components/orderSummary";
import React from "react";

const Checkout = async () => {
  const cart = await getCart();

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <section>
          <CheckoutClient cart={cart} />
          <OrderSummary cart={cart} />
        </section>
      ) : (
        <NoProductCart />
      )}
    </main>
  );
};

export default Checkout;
