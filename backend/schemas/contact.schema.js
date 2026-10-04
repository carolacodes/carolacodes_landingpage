import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100),

  email: z
    .string()
    .trim()
    .email("El email no es válido"),

  whatsapp: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal("")),

  business: z
    .string()
    .trim()
    .max(150)
    .optional()
    .or(z.literal("")),

  problem: z
    .string()
    .trim()
    .min(10, "Contame un poco más sobre el problema")
    .max(2000),

  currentProcess: z
    .string()
    .trim()
    .min(10, "Contame brevemente cómo lo resolvés actualmente")
    .max(2000),

  solutionTypes: z
    .array(
      z.enum([
        "customSoftware",
        "automation",
        "integrations",
        "ai",
        "webPlatform",
        "notSure",
      ])
    )
    .min(1, "Seleccioná al menos una opción"),

  projectStage: z.enum([
    "idea",
    "definedProcess",
    "existingTools",
    "existingSystem",
  ]),

  budget: z.enum([
    "unknown",
    "under500",
    "500-1000",
    "1000-3000",
    "3000plus",
    "preferToDiscuss",
  ]),

  language: z.enum(["es", "en"]).default("es"),
  // Honeypot
  website: z.string().optional().default(""),
});