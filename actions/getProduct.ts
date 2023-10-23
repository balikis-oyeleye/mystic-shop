import prisma from "@/lib/prismadb";

export const getProduct = async (params: string) => {
  try {
    const products = await prisma.product.findUnique({
      where: {
        id: params,
      },
    });

    return products;
  } catch (error: any) {
    return [];
  }
};
