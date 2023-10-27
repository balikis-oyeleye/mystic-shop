import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import prisma from "@/lib/prismadb";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const body = await request.json();

  const { fullName, email, password } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.json("This is the error");
    }
  });

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma.customer.create({
      data: {
        email,
        name: fullName,
        password: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (e: any) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return NextResponse.json({
          message: "An account already existed with that email!",
        });
      }
    }
    return NextResponse.error();
  }
}
