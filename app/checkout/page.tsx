import { getCart } from "@/actions/getCart";
import getCustomer from "@/actions/getCustomer";
import CheckoutClient from "@/components/checkoutClient";
import OrderSummary from "@/components/orderSummary";
import React from "react";

const Checkout = async () => {
  const cart = await getCart();
  // const customer = await getCustomer();

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      {cart.length > 0 ? (
        <section>
          <CheckoutClient cart={cart} />
          <OrderSummary cart={cart} />
        </section>
      ) : (
        <div className="no-cart__product">
          <p>Cart is Empty</p>
        </div>
      )}
    </main>
  );
};

export default Checkout;
