import getCustomer from "@/actions/getCustomer";
import { NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

interface Params {
  params: { productId?: string };
}

export async function POST(request: Request, { params }: Params) {
  const customer = await getCustomer();

  if (!customer) {
    return NextResponse.error();
  }

  const { productId } = params;
  if (productId || typeof productId !== "string") {
    throw new Error("Invalid ID");
  }

  let wishlistIds = [...(customer.wishlistId || [])];

  wishlistIds.push(productId);

  const customer_ = await prisma?.customer.update({
    where: {
      id: customer.id,
    },
    data: {
      wishlistId: wishlistIds,
    },
  });

  return NextResponse.json(customer_);
}
