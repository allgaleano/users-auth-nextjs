import { RegisterSchema } from "@/schemas";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";

export async function POST(request: NextRequest) {
  const values = await request.json();

  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return NextResponse.json({ error: "Invalid Fields" });
  }

  const { name ,email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);
  
  if (existingUser) {
    return NextResponse.json({ error: "User already exists" });
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  return NextResponse.json({ success: "User created" });
}