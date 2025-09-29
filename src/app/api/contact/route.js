// /app/api/contact/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();

    // Send email via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // must be verified domain or "onboarding@resend.dev"
      to: "mehul21dws@gmail.com", // your email
      subject: subject || "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }
}