import { resend } from "../libs/resend.js";
import { escapeHtml } from "../utils/escapeHtml.js";

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

  // Datos sanitizados
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeWhatsapp = escapeHtml(
    whatsapp || "No informado"
  );
  const safeBusiness = escapeHtml(
    business || "No informado"
  );
  const safeProblem = escapeHtml(problem);
  const safeCurrentProcess = escapeHtml(
    current_process
  );

  const safeSolutionTypes = Array.isArray(
    solution_types
  )
    ? solution_types
        .map((item) => escapeHtml(item))
        .join(", ")
    : "";

  const safeProjectStage =
    escapeHtml(project_stage);

  const safeBudget = escapeHtml(budget);
  const safeLanguage = escapeHtml(language);

  const safeCreatedAt = created_at
    ? new Date(created_at).toLocaleString("es-AR")
    : "No informado";

  const { data, error } = await resend.emails.send({
    from: "CarolaCodes <hola@carolacodes.com>",

    to: [process.env.CONTACT_EMAIL],

    subject: `Nuevo lead de CarolaCodes — ${safeName}`,

    html: `
      <div style="
        margin: 0;
        padding: 40px 20px;
        background: #f8fafc;
        font-family: Inter, Arial, sans-serif;
      ">

        <div style="
          max-width: 680px;
          margin: 0 auto;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(0, 23, 31, 0.08);
        ">

          <!-- Header -->
          <div style="
            padding: 28px 32px;
            background: #00171F;
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

          <!-- Content -->
          <div style="padding: 36px 32px;">

            <div style="
              display: inline-block;
              padding: 7px 12px;
              border-radius: 999px;
              background: #e8fbfd;
              color: #007EA7;
              font-size: 11px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
              margin-bottom: 20px;
            ">
              NUEVO LEAD
            </div>

            <h1 style="
              margin: 0;
              font-size: 28px;
              line-height: 1.2;
              color: #00171F;
              letter-spacing: -0.03em;
            ">
              Nueva consulta desde CarolaCodes
            </h1>

            <p style="
              margin: 14px 0 0 0;
              color: #64748b;
              font-size: 15px;
              line-height: 1.7;
            ">
              Se recibió una nueva consulta desde el formulario de diagnóstico.
            </p>

            <div style="
              margin: 28px 0;
              border-top: 1px solid #e2e8f0;
            "></div>

            <!-- Contact data -->
            <h2 style="
              margin: 0 0 18px 0;
              font-size: 18px;
              color: #00171F;
            ">
              Datos de contacto
            </h2>

            <table
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="
                border-collapse: collapse;
                font-size: 14px;
                color: #334155;
              "
            >
              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Nombre
                </td>
                <td style="padding: 8px 0;">
                  ${safeName}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Email
                </td>
                <td style="padding: 8px 0;">
                  ${safeEmail}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  WhatsApp
                </td>
                <td style="padding: 8px 0;">
                  ${safeWhatsapp}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Negocio / proyecto
                </td>
                <td style="padding: 8px 0;">
                  ${safeBusiness}
                </td>
              </tr>
            </table>

            <div style="
              margin: 28px 0;
              border-top: 1px solid #e2e8f0;
            "></div>

            <!-- Project -->
            <h2 style="
              margin: 0 0 18px 0;
              font-size: 18px;
              color: #00171F;
            ">
              Proyecto
            </h2>

            <p style="
              margin: 0 0 8px 0;
              font-weight: 700;
              color: #00171F;
            ">
              Problema
            </p>

            <div style="
              padding: 16px;
              border-radius: 14px;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              color: #475569;
              font-size: 14px;
              line-height: 1.7;
              margin-bottom: 20px;
            ">
              ${safeProblem}
            </div>

            <p style="
              margin: 0 0 8px 0;
              font-weight: 700;
              color: #00171F;
            ">
              Proceso actual
            </p>

            <div style="
              padding: 16px;
              border-radius: 14px;
              background: #f8fafc;
              border: 1px solid #e2e8f0;
              color: #475569;
              font-size: 14px;
              line-height: 1.7;
              margin-bottom: 20px;
            ">
              ${safeCurrentProcess}
            </div>

            <table
              cellpadding="0"
              cellspacing="0"
              width="100%"
              style="
                border-collapse: collapse;
                font-size: 14px;
                color: #334155;
              "
            >
              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Tipo de solución
                </td>
                <td style="padding: 8px 0;">
                  ${safeSolutionTypes}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Estado del proyecto
                </td>
                <td style="padding: 8px 0;">
                  ${safeProjectStage}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Presupuesto
                </td>
                <td style="padding: 8px 0;">
                  ${safeBudget}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Idioma
                </td>
                <td style="padding: 8px 0;">
                  ${safeLanguage}
                </td>
              </tr>

              <tr>
                <td style="padding: 8px 0; font-weight: 700;">
                  Fecha
                </td>
                <td style="padding: 8px 0;">
                  ${safeCreatedAt}
                </td>
              </tr>
            </table>
          </div>

          <!-- Footer -->
          <div style="
            padding: 20px 32px;
            background: #00171F;
            color: #64748b;
            font-size: 11px;
          ">
            CarolaCodes · hola@carolacodes.com
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error(
      "Error enviando email interno:",
      error
    );

    throw new Error(
      "No se pudo enviar el email del nuevo lead"
    );
  }

  return data;
};

export const sendClientConfirmationEmail = async (
  contact
) => {
  const {
    name,
    email,
    language,
  } = contact;

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);

  const isEnglish = language === "en";

  const subject = isEnglish
    ? "We received your project — CarolaCodes"
    : "Recibí tu consulta — CarolaCodes";

  const title = isEnglish
    ? `Thanks, ${safeName}. I received your project.`
    : `Gracias, ${safeName}. Recibí tu consulta.`;

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

  const badgeText = isEnglish
    ? "PROJECT RECEIVED"
    : "CONSULTA RECIBIDA";

  const { data, error } = await resend.emails.send({
    from: "CarolaCodes <hola@carolacodes.com>",

    to: [safeEmail],

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

          <!-- Header -->
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

          <!-- Content -->
          <div style="
            padding: 40px 32px 36px 32px;
          ">

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
              ${badgeText}
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

          <!-- Footer -->
          <div style="
            padding: 20px 32px;
            border-top: 1px solid rgba(255,255,255,0.08);
            color: #64748b;
            font-size: 11px;
          ">
            CarolaCodes · hola@carolacodes.com
          </div>
        </div>
      </div>
    `,
  });

  if (error) {
    console.error(
      "Error enviando confirmación al cliente:",
      error
    );

    throw new Error(
      "No se pudo enviar el email de confirmación"
    );
  }

  return data;
};