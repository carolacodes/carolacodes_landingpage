import { Router } from "express";
import { createContact } from "../controllers/contact.controller.js";
import { contactRateLimit } from "../middlewares/contactRateLimit.js";

const router = Router();

router.post("/", contactRateLimit, createContact);

export default router;