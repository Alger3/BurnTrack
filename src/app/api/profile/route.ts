import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type ProfileRow = {
  id: number;
  email: string;
  name: string;
  role: string;
  heightCm: number;
  weightKg: number;
  age: number | null;
  sex: string | null;
};

async function getCurrentUserId() {
  const cookieStore = await cookies();
  const userId = Number(cookieStore.get("burntrack_user_id")?.value);

  return Number.isInteger(userId) && userId > 0 ? userId : null;
}

export async function GET() {
  const userId = await getCurrentUserId();

  if (!userId) {
    return NextResponse.json(
      { message: "Please login before editing your profile." },
      { status: 401 }
    );
  }

  const users = await prisma.$queryRawUnsafe<ProfileRow[]>(
    `SELECT
      id,
      email,
      name,
      role,
      height_cm AS heightCm,
      weight_kg AS weightKg,
      age,
      sex
    FROM users
    WHERE id = ?`,
    userId
  );

  const user = users[0];

  if (!user) {
    return NextResponse.json(
      { message: "Profile not found." },
      { status: 404 }
    );
  }

  return NextResponse.json({ user });
}

export async function PUT(request: Request) {
  const userId = await getCurrentUserId();

  if (!userId) {
    return NextResponse.json(
      { message: "Please login before editing your profile." },
      { status: 401 }
    );
  }

  const body = await request.json();
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const heightCm = Number(body.heightCm);
  const weightKg = Number(body.weightKg);
  const age =
    body.age === "" || body.age === null || body.age === undefined
      ? null
      : Number(body.age);
  const sex = typeof body.sex === "string" ? body.sex.trim() || null : null;

  if (!name) {
    return NextResponse.json({ message: "Name is required." }, { status: 400 });
  }

  if (!Number.isFinite(heightCm) || heightCm <= 0) {
    return NextResponse.json(
      { message: "Height must be greater than 0." },
      { status: 400 }
    );
  }

  if (!Number.isFinite(weightKg) || weightKg <= 0) {
    return NextResponse.json(
      { message: "Weight must be greater than 0." },
      { status: 400 }
    );
  }

  if (age !== null && (!Number.isInteger(age) || age <= 0)) {
    return NextResponse.json(
      { message: "Age must be a whole number greater than 0." },
      { status: 400 }
    );
  }

  await prisma.$executeRawUnsafe(
    `UPDATE users
    SET name = ?,
      height_cm = ?,
      weight_kg = ?,
      age = ?,
      sex = ?
    WHERE id = ?`,
    name,
    heightCm,
    weightKg,
    age,
    sex,
    userId
  );

  return NextResponse.json({ message: "Profile saved." });
}
