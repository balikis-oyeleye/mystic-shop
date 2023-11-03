import { getCart } from "@/actions/getCart";
import CartClient from "./cartClient";

const Cart = async () => {
  const cart = await getCart();

  return <CartClient cart={cart} />;
};

export default Cart;
