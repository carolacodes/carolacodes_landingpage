import { resend } from "../libs/resend.js";

export const sendNewLeadEmail = async (contact) => {
  const {
    name,
    email,
    whatsapp,
    business,
    problem,
    current_process,
    solution_types,
    project_stage,
    budget,
    language,
    created_at,
  } = contact;

  const { data, error } = await resend.emails.send({
    from: "CarolaCodes <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL],
    subject: `Nuevo lead de CarolaCodes — ${name}`,

    html: `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; color: #00171f;">
        <h1 style="font-size: 24px; margin-bottom: 8px;">
          Nuevo contacto desde CarolaCodes
        </h1>

        <p style="color: #475569; margin-bottom: 24px;">
          Se recibió una nueva consulta desde el formulario de la web.
        </p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

        <h2 style="font-size: 18px;">Datos de contacto</h2>

        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp || "No informado"}</p>
        <p><strong>Negocio / proyecto:</strong> ${business || "No informado"}</p>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 24px 0;" />

        <h2 style="font-size: 18px;">Proyecto</h2>

        <p><strong>Problema:</strong></p>
        <p style="color: #334155;">${problem}</p>

        <p><strong>Proceso actual:</strong></p>
        <p style="color: #334155;">${current_process}</p>

        <p><strong>Tipo de solución:</strong> ${solution_types.join(", ")}</p>
        <p><strong>Estado del proyecto:</strong> ${project_stage}</p>
        <p><strong>Presupuesto:</strong> ${budget}</p>
        <p><strong>Idioma:</strong> ${language}</p>
        <p><strong>Fecha:</strong> ${new Date(created_at).toLocaleString("es-AR")}</p>
      </div>
    `,
  });

  if (error) {
    console.error("Error enviando email interno:", error);
    throw new Error("No se pudo enviar el email del nuevo lead");
  }

  return data;
};

export const sendClientConfirmationEmail = async (contact) => {
  const { name, email, language } = contact;

  const isEnglish = language === "en";

  const subject = isEnglish
    ? "We received your project — CarolaCodes"
    : "Recibí tu consulta — CarolaCodes";

  const title = isEnglish
    ? `Thanks, ${name}. I received your project.`
    : `Gracias, ${name}. Recibí tu consulta.`;

  const description = isEnglish
    ? "I’ll review what you shared and get back to you within the next 24 business hours."
    : "Voy a revisar lo que me contaste y te voy a responder dentro de las próximas 24 horas hábiles.";

  const secondaryText = isEnglish
    ? "If you want, you can also book a call directly."
    : "Si querés, también podés agendar una llamada directamente.";

  const buttonText = isEnglish
    ? "Book a call"
    : "Agendar una llamada";

  const footerText = isEnglish
    ? "Software, automation and practical AI for real business problems."
    : "Software, automatización e IA aplicada para resolver problemas reales.";

  const { data, error } = await resend.emails.send({
    from: "CarolaCodes <onboarding@resend.dev>",
    to: [email],
    subject,

    html: `
      <div style="
        margin: 0;
        padding: 40px 20px;
        background: #001015;
        font-family: Inter, Arial, sans-serif;
      ">
        <div style="
          max-width: 620px;
          margin: 0 auto;
          background: #00171F;
          border: 1px solid rgba(29,242,248,0.18);
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.35);
        ">

          <div style="
            padding: 28px 32px;
            border-bottom: 1px solid rgba(255,255,255,0.08);
          ">
            <div style="
              font-size: 24px;
              font-weight: 800;
              color: #ffffff;
              letter-spacing: -0.02em;
            ">
              Carola<span style="color:#1DF2F8;">Codes</span>
            </div>
          </div>

          <div style="padding: 40px 32px 36px 32px;">
            <div style="
              display: inline-block;
              padding: 7px 12px;
              border-radius: 999px;
              background: rgba(29,242,248,0.08);
              border: 1px solid rgba(29,242,248,0.22);
              color: #1DF2F8;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              margin-bottom: 22px;
            ">
              ${isEnglish ? "PROJECT RECEIVED" : "CONSULTA RECIBIDA"}
            </div>

            <h1 style="
              margin: 0;
              font-size: 30px;
              line-height: 1.2;
              color: #ffffff;
              letter-spacing: -0.03em;
            ">
              ${title}
            </h1>

            <p style="
              margin: 18px 0 0 0;
              color: #cbd5e1;
              font-size: 16px;
              line-height: 1.7;
            ">
              ${description}
            </p>

            <div style="
              margin: 28px 0;
              padding: 20px;
              border-radius: 16px;
              background: rgba(255,255,255,0.04);
              border: 1px solid rgba(255,255,255,0.08);
            ">
              <p style="
                margin: 0;
                color: #e2e8f0;
                font-size: 14px;
                line-height: 1.6;
              ">
                ${secondaryText}
              </p>
            </div>

            <a
              href="https://cal.com/carola-cardozo-xzcc8z/30min"
              style="
                display: inline-block;
                padding: 14px 24px;
                background: #1DF2F8;
                color: #00171F;
                text-decoration: none;
                border-radius: 999px;
                font-weight: 700;
                font-size: 14px;
                box-shadow: 0 0 24px rgba(29,242,248,0.32);
              "
            >
              ${buttonText}
            </a>

            <p style="
              margin: 32px 0 0 0;
              color: #64748b;
              font-size: 12px;
              line-height: 1.6;
            ">
              ${footerText}
            </p>
          </div>

          <div style="
            padding: 20px 32px;
            border-top: 1px solid rgba(255,255,255,0.08);
            color: #64748b;
            font-size: 11px;
          ">
            CarolaCodes · carolacodes@gmail.com
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error("Error enviando confirmación al cliente:", error);
    throw new Error("No se pudo enviar el email de confirmación");
  }

  return data;
};