"use server";

import prisma from "@/lib/prisma";
import { contactSchema } from "@/lib/validation/schema";

export async function createMessage(formData: FormData) {
  const rawData = {
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = contactSchema.safeParse(rawData);

  if (!result.success) {
    // Return detailed errors, don't just log
    return {
      success: false,
      errors: result.error.format(),
    };
  }

  const { name, email, message } = result.data;

  try {
    await prisma.contactMessage.create({
      data: { name, email, message },
    });
    return {
      success: true,
    };
  } catch (error) {
    console.error("Error saving message:", error);
    return {
      success: false,
      errors: { message: "Database error, please try again." },
    };
  }
}
