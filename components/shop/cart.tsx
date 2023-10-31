import { getCart } from "@/actions/getCart";
import CartClient from "./cartClient";

const Cart = async () => {
  const cart = await getCart();

  console.log(cart);
  return (
    <>
      <CartClient cart={cart} />
    </>
  );
};

export default Cart;
