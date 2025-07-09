import { connectDB } from "@/lib/mongodb";
import UserModel from "@/models/UserSchema";
import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(1, "Message is required"),
});

export async function POST(request: Request) {
  const body = await request.json();

  const result = schema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { success: false, error: result.error.errors[0].message },
      { status: 400 }
    );
  }

  const { name, email, message } = result.data;

  if (!name || !email || !message) {
    return NextResponse.json(
      { success: false, error: "All fields are required." },
      { status: 400 }
    );
  }

  try {
    await connectDB();
    await UserModel.create({ name, email, message });

    return NextResponse.json(
      { success: true, message: "Message stored successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("DB Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error. Try again later." },
      { status: 500 }
    );
  }
}
