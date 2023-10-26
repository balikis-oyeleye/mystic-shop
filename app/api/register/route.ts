import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { Prisma } from "@prisma/client";

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
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        console.log(
          "There is a unique constraint violation, a new user cannot be created with this email"
        );
      }
    }
    return NextResponse.json(e);
  }
}
