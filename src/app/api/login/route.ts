import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const { account, password } = await request.json();

  if (typeof account !== "string" || typeof password !== "string") {
    return NextResponse.json(
      { message: "Please enter both account and password." },
      { status: 400 }
    );
  }

  const email = account.trim().toLowerCase();

  if (!email || !password.trim()) {
    return NextResponse.json(
      { message: "Please enter both account and password." },
      { status: 400 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email
    }
  });

  if (!user) {
    return NextResponse.json(
      { message: "Invalid account or password." },
      { status: 401 }
    );
  }

  const passwordMatches = await bcrypt.compare(password, user.passwordHash);

  if (!passwordMatches) {
    return NextResponse.json(
      { message: "Invalid account or password." },
      { status: 401 }
    );
  }

  const response = NextResponse.json({
    user: {
      id: user.id,
      email: user.email,
      name: user.name
    }
  });

  response.cookies.set("burntrack_user_id", String(user.id), {
    httpOnly: true,
    sameSite: "lax",
    path: "/"
  });

  return response;
}
