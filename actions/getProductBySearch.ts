import prisma from "@/lib/prismadb";

export const getProductBySearch = async (query: string) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        name: {
          search: "cat",
        },
      },
    });

    return products;
  } catch (error: any) {
    return [];
  }
};
