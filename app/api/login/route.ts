import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCustomer from "@/actions/getCustomer";
import { cookies } from "next/headers";
import { getCart } from "@/actions/getCart";

export async function POST(request: Request) {
  const cookieStore = cookies();

  const customer = await getCustomer();
  let id = cookieStore.get("ms-id")?.value;

  if (!id) return NextResponse.json({ message: "success" });

  const cartProducts = await prisma.cart.findMany({
    where: {
      customerId: {
        equals: id,
      },
    },
  });

  const cart = await prisma.cart.updateMany({
    where: {
      customerId: id,
    },
    data: {
      customerId: {
        set: customer?.id,
      },
    },
  });

  cookieStore.delete("ms-id");

  if (cart) {
    return NextResponse.json(cart);
  } else {
    NextResponse.error();
  }
}
