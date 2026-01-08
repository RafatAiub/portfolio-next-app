/**
 * Contact API Route
 * Handles contact form submissions
 * Demonstrates Next.js API routes functionality
 */

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // In a real application, you would:
    // 1. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 2. Save to a database
    // 3. Send notifications

    // TODO: Integrate with your preferred email service here
    // Example: await sendEmail({ to: 'your-email@example.com', subject, body: message });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json(
      {
        message: "Message received successfully",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

