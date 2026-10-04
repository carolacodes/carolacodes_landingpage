import rateLimit from "express-rate-limit";

export const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,

  message: {
    ok: false,
    message: "Demasiadas solicitudes. Intentá nuevamente más tarde.",
  },

  standardHeaders: true,
  legacyHeaders: false,
});