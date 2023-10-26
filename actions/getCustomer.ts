import { getServerSession } from "next-auth/next";
import { authOptions } from "@/constants/authOptions";
import prisma from "@/lib/prismadb";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCustomer() {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const customer = await prisma.customer.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!customer) {
      return null;
    }

    return customer;
  } catch (error: any) {
    return null;
  }
}
