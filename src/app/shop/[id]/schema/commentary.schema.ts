import { z } from "zod";

export const CommentarySchema = z.object({
  commentary: z
    .string()
    .min(10, "Must have at least 10 characters")
    .max(50, "Maximun lenght reached"),
  rating: z.number().int().positive(),
  clientId: z.string().uuid(),
  itemId: z.string().uuid(),
});
