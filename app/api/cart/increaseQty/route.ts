import { getCart } from "@/actions/getCart";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const cartProducts = await getCart();

  const cart = body;
  let isContain = cartProducts.find((temp) => temp.productId === cart.id);

  if (isContain) {
    const cart = await prisma.cart.update({
      where: {
        id: isContain.id,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(cart);
  } else {
    return NextResponse.error();
  }
}
