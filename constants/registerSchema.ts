import { z } from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(3, "Product name must have more than 3 letters"),
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});

export type RegisterSchemaType = z.infer<typeof registerSchema>;
