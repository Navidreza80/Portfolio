"use server";

import prisma from "@/lib/prisma";
import { ContactFormInput } from "@/types";

export async function createMessage(formData: ContactFormInput) {
  try {
    await prisma.contactMessage.create({
      data: {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Error saving message:", error);
    return { success: false, error: "Something went wrong" };
  }
}
