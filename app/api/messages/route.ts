import { NextResponse } from "next/server";
// import { db } from "@/lib/db";
import { messages, insertMessageSchema } from "@/shared/schema";
import { z } from "zod";

// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const validated = insertMessageSchema.parse(body);
//     const [message] = await db.insert(messages).values(validated).returning();
//     return NextResponse.json(message, { status: 201 });
//   } catch (err) {
//     if (err instanceof z.ZodError) {
//       return NextResponse.json(
//         { message: err.errors[0].message, field: err.errors[0].path.join(".") },
//         { status: 400 }
//       );
//     }
//     return NextResponse.json({ message: "Internal server error" }, { status: 500 });
//   }
// }

export async function GET() {
  // Mock data for Phase 0
  const messages = [
    { id: 1, name: "Christi", message: "Hello!" },
    { id: 2, name: "Tad", message: "Hi there!" },
  ];

  return NextResponse.json(messages);
}

// Optional: keep POST for testing form submissions
export async function POST(request: Request) {
  // Just echo back the request body for now
  const body = await request.json();
  return NextResponse.json({ ...body, id: Math.floor(Math.random() * 1000) });
}