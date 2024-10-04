"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("email");

  if (!validateString(email)) {
    return {
      error: "Invalid email",
    };
  }

  if (!validateString(message)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "plotkin2016@gmail.com",
      subject: "Message from contact form",
      replyTo: email as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: email as string,
      }),
    });
  } catch (err) {
    console.error("Error sending email:", err);
    return {
      error: getErrorMessage(err),
    };
  }

  return {
    data,
  };
};
