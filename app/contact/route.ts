import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { insertMessageSchema } from "@/shared/schema";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Optional honeypot to ignore bots
    if (body.company) return NextResponse.json({ success: true });

    const { name, email, phone, content } = insertMessageSchema.parse(body);

    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "hotmail", "outlook", "yahoo", etc.
      auth: {
        user: process.env.EMAIL_USER,      // your email
        pass: process.env.EMAIL_PASSWORD,  // app password (see Step 3)
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,         // sender name + email
      to: process.env.CONTACT_EMAIL,       // your personal email
      subject: `New Contact Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || "N/A"}\n\nMessage:\n${content}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: error instanceof Error ? error.message : "Failed to send message" },
      { status: 500 }
    );
  }
}