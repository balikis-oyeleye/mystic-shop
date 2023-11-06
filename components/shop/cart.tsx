import { getCart } from "@/actions/getCart";
import CartClient from "./cartClient";
import getCustomer from "@/actions/getCustomer";

const Cart = async () => {
  const cart = await getCart();
  const customer = await getCustomer();

  return <CartClient cart={cart} customer={customer?.id} />;
};

export default Cart;
