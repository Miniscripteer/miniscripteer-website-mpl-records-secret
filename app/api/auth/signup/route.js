import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { sendToDiscord } from "@/lib/discord";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "Name, email, and password are required." }, { status: 400 });
    }
    if (password.length < 8) {
      return NextResponse.json({ error: "Password must be at least 8 characters." }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    const existing = await prisma.user.findUnique({ where: { email: normalizedEmail } });
    if (existing) {
      return NextResponse.json({ error: "An account with that email already exists." }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name: name.trim(), email: normalizedEmail, password: hashed },
    });

    // Fire-and-forget style notification to Discord (the "emails" webhook).
    await sendToDiscord(process.env.DISCORD_SIGNUP_WEBHOOK_URL, {
      title: "New account signup — miniscripteer.com",
      color: 0x5eead4,
      fields: [
        { name: "Name", value: user.name },
        { name: "Email", value: user.email },
      ],
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("signup error:", err);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
