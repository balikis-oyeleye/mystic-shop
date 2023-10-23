import prisma from "@/lib/prismadb";

export const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      where: {
        status: {
          equals: "available",
        },
      },
    });

    return products;
  } catch (error: any) {
    return [];
  }
};
