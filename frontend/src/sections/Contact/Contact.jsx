import { useLanguage } from "../../hooks/useLanguage";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { getCalUrl } from "../../utils/cal";
import { Link } from "react-router-dom";
function Contact() {
  const { t } = useLanguage();

  const whatsappUrl = createWhatsAppUrl(
    "5493794404000",
    t.contact.whatsapp.message
  );
  const calUrl = getCalUrl();

  return (
    <section
      id="contacto"
      className="w-full bg-[#00171F] py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Aurora glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-[#1DF2F8]/15 rounded-full blur-[180px] pointer-events-none animate-aurora-1" />

      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#00A8E8]/10 rounded-full blur-[150px] pointer-events-none animate-aurora-2" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#1DF2F8]">
              {t.contact.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-tight">
            {t.contact.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Diagnosis */}
          <div className="saas-card-interactive rounded-2xl bg-white/[0.04] border border-white/10 p-8 flex flex-col justify-between gap-8 backdrop-blur-xl cursor-pointer">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-[#1DF2F8] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">
                  checklist_rtl
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {t.contact.diagnostic.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.contact.diagnostic.description}
              </p>
            </div>

            <Link
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all hover:scale-105"
              to="/diagnostico"
            >
              <span>{t.contact.diagnostic.button}</span>

              <span className="material-symbols-outlined text-[18px]">
                open_in_new
              </span>
            </Link>
          </div>

          {/* Call */}
          <div className="saas-card-interactive rounded-2xl bg-[#002230] border-2 border-[#1DF2F8]/70 p-8 shadow-[0_0_40px_-5px_rgba(29,242,248,0.3)] flex flex-col justify-between gap-8 relative cursor-pointer">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#1DF2F8] text-[#00171F] font-extrabold text-[11px] tracking-wider shadow-sm uppercase">
              {t.contact.recommended}
            </div>

            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#1DF2F8]/20 border border-[#1DF2F8]/40 text-[#1DF2F8] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">
                  video_camera_front
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {t.contact.call.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.contact.call.description}
              </p>
            </div>

            <a
              className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-full bg-[#1DF2F8] text-[#00171F] font-bold text-sm shadow-[0_0_24px_rgba(29,242,248,0.5)] hover:shadow-[0_0_32px_rgba(29,242,248,0.8)] hover:scale-105 hover:-translate-y-0.5 transition-all"
              href={calUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{t.contact.call.button}</span>

              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
            </a>
          </div>

          {/* WhatsApp */}
          <div className="saas-card-interactive rounded-2xl bg-white/[0.04] border border-white/10 p-8 flex flex-col justify-between gap-8 backdrop-blur-xl cursor-pointer">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 text-[#1DF2F8] flex items-center justify-center">
                <span className="material-symbols-outlined text-[26px]">
                  chat
                </span>
              </div>

              <h3 className="text-xl font-bold text-white">
                {t.contact.whatsapp.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {t.contact.whatsapp.description}
              </p>
            </div>

            <a
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all hover:scale-105"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>{t.contact.whatsapp.button}</span>

              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </a>
          </div>
        </div>

        {/* Email */}
        <div className="text-center pt-4">
          <p className="text-sm sm:text-base text-slate-400">
            {t.contact.emailPrefix}{" "}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=hola@carolacodes.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              hola@carolacodes.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;