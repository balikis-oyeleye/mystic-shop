import { getCart } from "@/actions/getCart";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const order = await prisma.order.deleteMany({
    where: { isPaid: { equals: false } },
  });

  return NextResponse.json(order);
}
