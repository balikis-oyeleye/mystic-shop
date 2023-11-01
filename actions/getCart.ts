import prisma from "@/lib/prismadb";
import getCustomer from "./getCustomer";

export const getCart = async () => {
  const customer = await getCustomer();

  try {
    const cart = await prisma.cart.findMany({
      where: { customerId: customer?.id },
      include: {
        product: true,
      },
    });

    return cart;
  } catch (error: any) {
    throw new Error(error);
  }
};
