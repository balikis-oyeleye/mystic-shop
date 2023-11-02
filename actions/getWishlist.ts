import prisma from "@/lib/prismadb";
import getCustomer from "./getCustomer";

export const getWishlist = async () => {
  try {
    const customer = await getCustomer();

    if (!customer) {
      return [];
    }

    const products = await prisma.product.findMany({
      where: {
        id: {
          in: [...(customer.wishlistId || [])],
        },
      },
    });

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};
