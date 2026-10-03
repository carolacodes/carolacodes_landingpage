import { useLanguage } from "../../hooks/useLanguage";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import LegalModal from "../LegalModal/LegalModal";
import { useState } from "react";

function Footer() {
  const { t } = useLanguage();

  const whatsappUrl = createWhatsAppUrl(
    "5493794404000",
    t.contact.whatsapp.message
  );

  const [legalModal, setLegalModal] = useState(null);

  return (
    <footer className="w-full bg-[#001015] border-t border-white/[0.08] text-slate-400 py-16">
      <div className="max-w-[1240px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12">
          {/* Brand */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Carola
                <span className="text-[#1DF2F8]">Codes</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1DF2F8]">
              {t.footer.contactTitle}
            </span>

            <a
              className="text-sm text-slate-200 hover:text-[#1DF2F8] transition-colors"
              href="mailto:carolacodes@gmail.com"
            >
              carolacodes@gmail.com
            </a>

            <a
              className="text-sm text-slate-400 hover:text-[#1DF2F8] transition-colors"
              href={whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              {t.footer.whatsapp}
            </a>

            <span className="text-xs text-slate-400">
              {t.footer.schedule}
            </span>
          </div>

          {/* Socials */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1DF2F8]">
              {t.footer.socialTitle}
            </span>

            <div className="flex flex-col gap-2">
              <a
                className="text-sm text-slate-400 hover:text-white transition-colors"
                href="https://www.linkedin.com/in/carola-cardozo/"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>

              <a
                className="text-sm text-slate-400 hover:text-white transition-colors"
                href="https://www.instagram.com/carolacodes/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} CarolaCodes. {t.footer.rights}
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal("terms")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {t.footer.terms}
            </button>

            <button
              onClick={() => setLegalModal("privacy")}
              className="hover:text-white cursor-pointer transition-colors"
            >
              {t.footer.privacy}
            </button>
          </div>
        </div>
      </div>

      <LegalModal
  isOpen={legalModal === "terms"}
  onClose={() => setLegalModal(null)}
  title={t.legal.terms.title}
>
  <div className="space-y-5">
    <p>{t.legal.terms.intro}</p>

    {t.legal.terms.sections.map((section) => (
      <div key={section.title}>
        <h3 className="font-semibold text-white">{section.title}</h3>
        <p className="mt-2">{section.text}</p>
      </div>
    ))}
  </div>
      </LegalModal>

      <LegalModal
        isOpen={legalModal === "privacy"}
        onClose={() => setLegalModal(null)}
        title={t.legal.privacy.title}
      >
        <div className="space-y-5">
          <p>{t.legal.privacy.intro}</p>

          {t.legal.privacy.sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-white">{section.title}</h3>
              <p className="mt-2">{section.text}</p>
            </div>
          ))}
        </div>
      </LegalModal>

    </footer>
  );
}

export default Footer;