import { z } from "zod";
export const loginSchema = z.object({
  username: z.string().min(6),
  password: z.string().min(6),
});
export type LoginFormValues = z.infer<typeof loginSchema>;
