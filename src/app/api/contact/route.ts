import { Resend } from "resend";

export async function POST(req: Request) {
  const resendApiKey = process.env.RESEND_API_KEY;
  if (!resendApiKey) {
    throw new Error("Missing Resend API key");
  }

  const resend = new Resend(resendApiKey);

  const { name, email, message } = await req.json();
  await resend.emails.send({
    from: "contact@modern-portfolio-4zvr.onrender.com",
    to: "mdwashimahmed221@gmail.com",
    subject: `New message from ${name}`,
    html: `<p>${message}</p><p>From: ${email}</p>`,
  });

  return new Response("Email sent!");
}