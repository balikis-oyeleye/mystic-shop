import { getCart } from "@/actions/getCart";
import getCustomer from "@/actions/getCustomer";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const customer = await getCustomer();
  const cartProducts = await getCart();

  const product = body;
  let isContain = cartProducts.find((temp) => temp.productId === product.id);

  if (isContain) {
    const cart = await prisma.cart.update({
      where: {
        id: isContain.id,
        customerId: customer?.id,
      },
      data: {
        quantity: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(cart);
  } else {
    const cart = await prisma.product.update({
      where: {
        id: product.id,
      },
      data: {
        Cart: {
          create: {
            customerId: customer?.id as string,
            quantity: 1,
          },
        },
      },
    });
    return NextResponse.json(cart);
  }
}
