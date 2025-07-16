"use server";

import prisma from "@/lib/prisma";
import { contactSchema } from "@/lib/validation/schema";

export async function createMessage(formData: FormData): Promise<void> {
  try {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      const errorMessages = result.error.format();
      return console.log({ success: false, errors: errorMessages });
    }

    const { name, email, message } = result.data;

    await prisma.contactMessage.create({
      data: { name, email, message },
    });
    return console.log({ success: true });
  } catch (error) {
    console.error("Error saving message:", error);
    return console.log({ success: false, error: "Something went wrong" });
  }
}
