import { getCart } from "@/actions/getCart";
import CartClient from "./cartClient";
import { cookies } from "next/headers";

const Cart = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("ms-id")?.value;
  const cart = await getCart(id as string);

  return <CartClient cart={cart} />;
};

export default Cart;
