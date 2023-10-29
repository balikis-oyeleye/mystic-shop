import { getCart } from "@/actions/getCart";
import CartClient from "./cartClient";

const Cart = async () => {
  const cart = await getCart();

  console.log(cart);
  return (
    <>
      <CartClient />
    </>
  );
};

export default Cart;
