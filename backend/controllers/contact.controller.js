import { contactSchema } from "../schemas/contact.schema.js";
import { saveContact } from "../services/contact.service.js";

export const createContact = async (req, res) => {
  try {
    const result = contactSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json({
        ok: false,
        message: "Datos inválidos",
        errors: result.error.flatten().fieldErrors,
      });
    }

    const contactData = result.data;

    // Honeypot: si está completo, fingimos que salió bien
    // pero NO guardamos nada ni enviamos emails.
    if (contactData.website) {
      return res.status(200).json({
        ok: true,
        message: "Consulta recibida correctamente",
      });
    }

    const savedContact = await saveContact(contactData);

    return res.status(201).json({
      ok: true,
      message: "Consulta recibida correctamente",
      data: savedContact,
    });
  } catch (error) {
    console.error("Error en createContact:", error);

    return res.status(500).json({
      ok: false,
      message: "Error interno del servidor",
    });
  }
};