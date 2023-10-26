import prisma from "@/lib/prismadb";

export const getProducts = async (category?: string, price?: string) => {
  try {
    let filter: any = {
      where: {
        status: {
          equals: "available",
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
    return [];
  }
};
