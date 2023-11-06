import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE({ params }: { params: { cartId: string } }) {
  const { cartId } = params;

  if (!cartId || typeof cartId !== "string") {
    throw new Error("Invalid Cart ID");
  }

  const cart = await prisma.cart.delete({
    where: {
      id: cartId,
    },
  });

  return NextResponse.json(cart);
}
