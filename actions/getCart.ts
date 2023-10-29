import prisma from "@/lib/prismadb";
import getCustomer from "./getCustomer";

export const getCart = async () => {
  const customer = await getCustomer();

  try {
    const allProduct = await prisma.product.findMany();
    const cart = await prisma.cart.findMany({
      where: {
        customerId: customer?.id as string,
      },
    });

    const cartProduct = allProduct.filter((prod) =>
      cart.some((car) => car.productId === prod.id)
    );

    return cartProduct;
  } catch (error: any) {
    throw new Error(error);
  }
};
