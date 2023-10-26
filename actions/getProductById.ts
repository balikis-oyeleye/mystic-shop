import prisma from "@/lib/prismadb";

export const getProductById = async (params: string) => {
  try {
    const products = await prisma.product.findUnique({
      where: {
        id: params,
      },
    });

    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};
