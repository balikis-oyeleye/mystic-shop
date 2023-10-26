import { NextResponse } from "next/server";
import { Prisma } from "@prisma/client";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  try {
    const user = await prisma?.customer.create({
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
