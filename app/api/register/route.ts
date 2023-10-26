import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const body = await req.json();

  const { fullName, email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await prisma?.customer.create({
    data: {
      email,
      name: fullName,
      password: hashedPassword,
    },
  });

  return NextResponse.json(user);
}
