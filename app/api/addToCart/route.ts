import getCustomer from "@/actions/getCustomer";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const customer = await getCustomer();

  const product = body;

  const cart = await prisma.product.update({
    where: { id: product.id },
    data: {
      Cart: {
        create: {
          customerId: customer?.id as string,
        },
      },
    },
  });

  return NextResponse.json(cart);
}
