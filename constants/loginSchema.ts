import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(4, { message: "Password must be at least 4 characters" }),
});

export type LoginSchemaType = z.infer<typeof loginSchema>;
