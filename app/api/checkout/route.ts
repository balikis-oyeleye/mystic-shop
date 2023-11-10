import Stripe from "stripe";
import getCustomer from "@/actions/getCustomer";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(request: Request) {
  const customer = await getCustomer();
  if (!customer) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  const cart: CartType[] = await request.json();

  if (!cart || cart.length === 0) {
    return new NextResponse("Add Products to cart", { status: 400 });
  }

  const line_items: Stripe.Checkout.SessionCreateParams.LineItem[] = [];

  cart.forEach((product) => {
    line_items.push({
      quantity: product.quantity,
      price_data: {
        currency: "USD",
        product_data: {
          name: product.product.name,
          images: [product.product.imageUrl],
        },
        unit_amount: product.product.price * 100,
      },
    });
  });

  const allOrder = cart.map((prod) => {
    return {
      address: "address",
      sellerId: prod.product.sellerId,
      totalAmount: prod.quantity * prod.product.price,
      productId: prod.product.id,
      custormerId: customer?.id,
      isPaid: false,
    };
  });

  await prisma.order.createMany({
    data: allOrder,
  });

  const session = await stripe.checkout.sessions.create({
    line_items,
    mode: "payment",
    billing_address_collection: "required",
    payment_method_types: ["card"],
    phone_number_collection: {
      enabled: true,
    },
    success_url: `${process.env.FRONTEND_STORE_URL}/checkout?payment=success`,
    cancel_url: `${process.env.FRONTEND_STORE_URL}/checkout?payment=cancelled`,
    metadata: {
      customer: customer.id,
    },
  });

  return NextResponse.json({ url: session.url });
}
