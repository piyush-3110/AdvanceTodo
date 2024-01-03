const { z } = require("zod");
const signupSchema = z.object({
  fullname: z
    .string({ required_error: "Name should be a string" })
    .trim()
    .min(3, { message: "Your name must have minimum length of 3" }),
  email: z
    .string({ required_error: "email should be a string" })
    .trim()
    .min(3, { message: "Your email must have minimum length of 3" }),
  password: z
    .string({ required_error: "Name should be a string" })
    .trim()
    .min(5, { message: "Your password must have minimum length of 5 chars" }),
});
module.exports = signupSchema;
