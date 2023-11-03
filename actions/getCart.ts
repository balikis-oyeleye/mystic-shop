import prisma from "@/lib/prismadb";
import getCustomer from "./getCustomer";

export const getCart = async () => {
  const customer = await getCustomer();

  if (!customer) {
    return [];
  }

  try {
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
  } catch (error: any) {
    throw new Error(error);
  }
};
