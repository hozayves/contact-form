import { z } from "zod";


export const contactFormSchema = z.object({
    firstname: z
        .string({
            invalid_type_error: "Firstname must be a string"
        })
        .nonempty("This field is required")
        .min(2, { message: "Firstname must be at least 2 characters" }),
    lastname: z
        .string({
            invalid_type_error: "Lastname must be a string"
        })
        .nonempty("This field is required")
        .min(2, { message: "Lastname must be at leasst 2 characters" }),
    email: z.string({
        invalid_type_error: "Email must be a string"
    })
        .nonempty("Email address is required")
        .email({ message: "Please enter a valid email address" }),
    query: z.enum(["support", "general"], { message: "Please select a query address" }),
    message: z.string({
        invalid_type_error: "Message must a string characters"
    })
        .nonempty("Message is required")
        .max(255, { message: "Message be 255 or less characters long" })
        .min(10, { message: "Message must be at least 10 characters minimum" }),
    contacted: z.boolean({ invalid_type_error: "Contacted must a boolean" })
        .refine(value => value === true, { message: "To submit this form, please consent to being contacted" })
})