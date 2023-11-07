import { getCart } from "@/actions/getCart";
import getCustomer from "@/actions/getCustomer";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import generateUniqueId from "generate-unique-id";

export async function POST(request: Request) {
  const body = await request.json();
  const cartProducts = await getCart();
  const customer = await getCustomer();
  const product = body;

  const idGenerate = generateUniqueId({ useLetters: false, length: 24 });

  let isContain = cartProducts.find((item) => item.productId === product.id);

  if (!customer || typeof customer === undefined) {
    const cookieStore = cookies();
    let id = cookieStore.get("ms-id")?.value;

    if (!id) {
      cookies().set({
        name: "ms-id",
        value: idGenerate,
        httpOnly: true,
        path: "/",
        expires: Date.UTC(2024, 4, 5),
      });
    }
    id = cookieStore.get("ms-id")?.value;

    if (isContain) {
      const cart = await prisma.cart.update({
        where: {
          id: isContain?.id,
          customerId: id as string,
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
              customerId: id as string,
              quantity: 1,
            },
          },
        },
      });
      return NextResponse.json(cart);
    }
  }

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
