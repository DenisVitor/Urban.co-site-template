import z from "zod";

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(5, "Must have at least 5 characters")
      .max(50, "Max lenght reached - 50 characters"),
    email: z
      .string()
      .max(50, "Max lenght reached - 50 characters")
      .email("Insert a valid email"),
    phone: z.string().max(50, "Max lenght reached - 50 characters"),
    password: z
      .string()
      .max(50, "Max lenght reached - limit 50 characters.")
      .regex(/(?=.*?[A-Z])/, "Must have at least one upper case character.")
      .regex(/(?=.*?[a-z])/, "Must have at least one lower case character")
      .regex(/(?=.*?[0-9])/, "Must have at least one number"),
    confirm: z.string().max(50, "Max lenght reached - 50 characters."),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "The passwords must be compatible.",
    path: ["confirm"],
  });

export const LoginSchema = z.object({
  email: z
    .string()
    .max(50, "Max lenght reached - 50 characters")
    .email("Insert a valid email"),
  password: z.string().max(50, "Max lenght reached - limit 50 characters."),
});
