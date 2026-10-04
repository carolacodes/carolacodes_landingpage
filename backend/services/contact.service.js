import { supabase } from "../libs/supabase.js";
import {
  sendNewLeadEmail,
  sendClientConfirmationEmail,
} from "./email.service.js";

export const saveContact = async (contactData) => {
  const { data, error } = await supabase
    .from("contacts")
    .insert([
      {
        name: contactData.name,
        email: contactData.email,
        whatsapp: contactData.whatsapp || null,
        business: contactData.business || null,
        problem: contactData.problem,
        current_process: contactData.currentProcess,
        solution_types: contactData.solutionTypes,
        project_stage: contactData.projectStage,
        budget: contactData.budget,
        language: contactData.language,
      },
    ])
    .select()
    .single();

  if (error) {
    console.error("Supabase error:", error);
    throw new Error("No se pudo guardar el contacto");
  }

  await sendNewLeadEmail(data);
  await sendClientConfirmationEmail(data);

  return data;
};