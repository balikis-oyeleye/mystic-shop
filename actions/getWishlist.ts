import prisma from "@/lib/prismadb";
import getCustomer from "./getCustomer";

export const getWishlist = async (category?: string, price?: string) => {
  try {
    const customer = await getCustomer();

    if (!customer) {
      return [];
    }

    let filter: any = {
      where: {
        status: {
          equals: "available",
        },
        id: {
          in: [...(customer.wishlistId || [])],
        },
      },
      orderBy: {},
    };

    if (category) {
      filter.where.category = {
        equals: category,
      };
    }

    if (price) {
      filter.orderBy.price = price;
    }

    const products = await prisma.product.findMany(filter);

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};
