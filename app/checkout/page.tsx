import { getCart } from "@/actions/getCart";
import getCustomer from "@/actions/getCustomer";
import CheckoutClient from "@/components/checkoutClient";
import React from "react";

const Checkout = async () => {
  const cart = await getCart();
  // const customer = await getCustomer();

  const sumTotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <main className="checkout-page">
      <h1>Checkout</h1>
      <section>
        <CheckoutClient cart={cart} />
        <div className="order-summary">
          <h4>Order Summary</h4>
          <hr />
          <div>
            <p>order total</p>
            <p>{sumTotal}</p>
          </div>
          <button className="btn-main">Checkout</button>
        </div>
      </section>
    </main>
  );
};

export default Checkout;
