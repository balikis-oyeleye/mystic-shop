import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";
import getCustomer from "@/actions/getCustomer";
import { cookies } from "next/headers";
import { getCart } from "@/actions/getCart";

export async function POST(request: Request) {
  const cookieStore = cookies();
  const allCart = await getCart();
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

  cartProducts.forEach(async (item) => {
    const isContained = allCart.some(
      (prod) => prod.productId === item.productId
    );

    if (isContained) {
      await prisma.cart.updateMany({
        where: {
          customerId: customer?.id,
          productId: item.productId,
        },
        data: {
          quantity: {
            increment: 1,
          },
        },
      });

      await prisma.cart.delete({
        where: {
          id: item.id,
        },
      });
    } else {
      await prisma.cart.updateMany({
        where: {
          customerId: id,
        },
        data: {
          customerId: {
            set: customer?.id,
          },
        },
      });
    }
  });

  cookieStore.delete("ms-id");
  return NextResponse.json({ message: "success" });
}
