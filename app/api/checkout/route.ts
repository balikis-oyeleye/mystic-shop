import getCustomer from "@/actions/getCustomer";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { absoluteUrl } from "@/utils/url";

const url = absoluteUrl("/checkout");

export async function GET() {
  try {
    const customer = await getCustomer();
    if (!customer) {
      return new NextResponse("Unauthorized", { status: 401 });
    }
  } catch (error) {
    console.log("[STRIPE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
