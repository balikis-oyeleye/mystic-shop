import { z } from "zod";

export const contactSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1),
  message: z
    .string()
    .min(6, { message: "Message must be at least 4 characters" }),
});

export type ContactSchemaType = z.infer<typeof contactSchema>;
