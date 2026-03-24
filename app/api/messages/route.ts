import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;

// Runtime checks
if (!resendApiKey) throw new Error("RESEND_API_KEY is not defined");
if (!contactEmail) throw new Error("CONTACT_EMAIL is not defined");

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, content, company } = body;

    // Honeypot (anti-bot)
    if (company) {
      return NextResponse.json({ success: true });
    }

    // Basic server-side validation
    if (!name || !email || !content) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Send email via Resend
    const response = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // update to your domain later
      to: contactEmail,
      subject: `New message from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || "N/A"}

Message:
${content}
      `,
    });

    console.log("Resend response:", response); // ✅ log for debugging

    return NextResponse.json({ success: true, id: response.data?.id });
  } catch (error: any) {
    console.error("Error sending contact email:", error);
    return NextResponse.json(
      { message: error.message || "Failed to send message" },
      { status: 500 }
    );
  }
}