import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().optional(),
  email: z.string().trim().pipe(z.email("Please enter a valid email address.")),
  phone: z.string().trim().optional(),
  organization: z.string().trim().optional(),
  role: z.string().trim().optional(),
  organizationType: z.string().optional(),
  programType: z.string().optional(),
  format: z.string().optional(),
  participants: z.string().trim().optional(),
  targetDate: z.string().trim().optional(),
  location: z.string().trim().optional(),
  services: z.array(z.string()).optional().default([]),
  description: z.string().trim().min(1, "Please add a short message."),
  referral: z.string().trim().optional(),
  consent: z.boolean().optional().default(true),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
