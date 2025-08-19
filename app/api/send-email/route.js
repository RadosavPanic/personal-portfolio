import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (req) => {
  const { name, email, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "radosav.panic01@gmail.com",
      subject: `Portfolio - new message from ${name}`,
      text: `From ${name} (${email})\n\n${message}`,
    });

    return new Response(JSON.stringify({ success: true }));
  } catch (error) {
    console.error("Resend error:", error);
    return new Response({ error: "Failed to send an email" });
  }
};
