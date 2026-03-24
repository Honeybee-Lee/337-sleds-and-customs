import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, content, company } = body;

    // Honeypot (anti-spam)
    if (company) {
      return NextResponse.json({ success: true });
    }

    // Basic validation (server-side)
    if (!name || !email || !content) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email
    const response = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // update later to your domain
      to: process.env.CONTACT_EMAIL!,
      subject: `New message from ${name}`,
      reply_to: email,
      text: `
Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}

Message:
${content}
      `,
    });

    return NextResponse.json({ success: true, id: response.data?.id });

  } catch (error) {
    console.error('EMAIL ERROR:', error);

    return NextResponse.json(
      { message: 'Failed to send message' },
      { status: 500 }
    );
  }
}