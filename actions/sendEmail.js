"use server";

import { Resend } from "resend";

export const sendEmail = async (formData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: "radosav.panic01@gmail.com",
      subject: `Portfolio - new message from ${name}`,
      text: `From ${name} (${email})\n\n${message}`,
    });

    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
