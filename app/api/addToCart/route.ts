import getCustomer from "@/actions/getCustomer";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const customer = await getCustomer();

  const product = body;

  const cart = await prisma.cart.create({
    data: {
      customerId: customer?.id as string,
      product: product,
      quantity: 1,
    },
  });

  return NextResponse.json(cart);
}
