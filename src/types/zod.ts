import { z } from "zod";

export const loginSchema = z.object({
  phoneNumber: z
    .string({
      required_error: "Phone number is required",
      invalid_type_error: "Phone number should be string",
    })
    .min(10, { message: "Phone number should be 10 numbers" })
    .max(10, { message: "Phone number should be 10 numbers" }),
  password: z
    .string({
      required_error: "Password is required",
      invalid_type_error: "Password should be string",
    })
    .min(4, { message: "password should be 4 numbers" })
    .max(4, { message: "password should be 4 numbers" }),
});
