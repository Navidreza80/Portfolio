import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be under 50 characters." }),

  email: z.string().email({ message: "Invalid email address." }),

  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(1000, { message: "Message is too long." }),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
