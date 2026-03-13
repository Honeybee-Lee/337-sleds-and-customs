import { NextResponse } from "next/server";
import { insertMessageSchema } from "@/shared/schema";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.company) {
      return NextResponse.json({ success: true }); // silently ignore bots
    }

    // Validate required fields (basic)
    const { name, email, phone, content } = insertMessageSchema.parse(body);

    // Send email using Resend
    await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // change to verified domain
      to: process.env.CONTACT_EMAIL!,
      subject: `New Contact Message from ${name}`,
      html: `
        <h2>New Website Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Message:</strong></p>
        <p>${content}</p>
      `,
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