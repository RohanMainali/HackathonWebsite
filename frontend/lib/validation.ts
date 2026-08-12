import { z } from "zod";

export const contactSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name."),
  email: z.email("Please enter a valid work email."),
  phone: z.string().trim().optional(),
  organization: z.string().trim().min(2, "Please enter your institution or company."),
  role: z.string().trim().min(2, "Please enter your role."),
  organizationType: z.string({ error: "Select an organization type." }).min(1, "Select an organization type."),
  programType: z.string({ error: "Select a program type." }).min(1, "Select a program type."),
  format: z.string({ error: "Select a preferred format." }).min(1, "Select a preferred format."),
  participants: z.string().trim().optional(),
  targetDate: z.string().trim().min(2, "Please share a target date or period."),
  location: z.string().trim().optional(),
  services: z.array(z.string()).min(1, "Select at least one service."),
  description: z.string().trim().min(30, "Please share at least 30 characters about the project."),
  referral: z.string().trim().optional(),
  consent: z.literal(true, { error: "Please confirm that we may respond to your inquiry." }),
  website: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;
