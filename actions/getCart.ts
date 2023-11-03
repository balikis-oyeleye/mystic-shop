import prisma from "@/lib/prismadb";
import getCustomer from "./getCustomer";
import { cookies } from "next/headers";

export const getCart = async () => {
  const cookieStore = cookies();
  const id = cookieStore.get("ms-id")?.value;
  const customer = await getCustomer();

  try {
    if (!customer) {
      const cart = await prisma.cart.findMany({
        where: {
          customerId: {
            equals: id,
          },
        },
        include: {
          product: true,
        },
      });

      return cart;
    } else {
      const cart = await prisma.cart.findMany({
        where: {
          customerId: {
            equals: customer?.id,
          },
        },
        include: {
          product: true,
        },
      });

      return cart;
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
