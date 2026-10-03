import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { getCalUrl } from "../../utils/cal";

function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappUrl = createWhatsAppUrl(
    "5493794404000",
    t.contact.whatsapp.message
  );
  const calUrl = getCalUrl();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#00171F]/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="h-20 max-w-[1240px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        {/* Brand */}
        <a className="flex items-center gap-3 group" href="#">
          <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/10 flex items-center justify-center p-1.5 shadow-inner transition-transform duration-300 group-hover:scale-105">
            <svg
              className="w-full h-full"
              fill="none"
              viewBox="0 0 44 44"
            >
              <rect
                fill="#002230"
                height="44"
                rx="10"
                stroke="#00A8E8"
                strokeWidth="1.5"
                width="44"
              />

              <path
                d="M16 17L10 22L16 27"
                stroke="#00A8E8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />

              <path
                d="M28 17L34 22L28 27"
                stroke="#1DF2F8"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
              />

              <circle cx="22" cy="22" fill="#1DF2F8" r="2.5" />
            </svg>
          </div>

          <span className="font-extrabold text-xl tracking-tight text-white">
            Carola
            <span className="text-[#1DF2F8]">Codes</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#servicios"
          >
            {t.navbar.services}
          </a>

          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#soluciones"
          >
            {t.navbar.solutions}
          </a>

          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#como-trabajo"
          >
            {t.navbar.process}
          </a>

          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#industrias"
          >
            {t.navbar.industries}
          </a>

          <a
            className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            href="#contacto"
          >
            {t.navbar.contact}
          </a>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-full bg-white/[0.06] border border-white/10 text-slate-200 text-sm font-semibold hover:bg-white/[0.12] hover:text-white transition-all"
            href={whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            WhatsApp
          </a>

          <a
            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#1DF2F8] text-[#00171F] font-semibold text-sm shadow-[0_0_24px_-2px_rgba(29,242,248,0.5)] hover:shadow-[0_0_32px_0px_rgba(29,242,248,0.75)] hover:-translate-y-0.5 transition-all"
            href={calUrl}
          >
            {t.navbar.call}
          </a>

          {/* Language */}
          <button
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 ml-1 text-[10px] font-bold text-slate-200 hover:bg-white/20 transition"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          {/* Mobile menu */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Abrir menú"
            className="xl:hidden w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined text-[20px]">
              menu
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="xl:hidden bg-[#00171F]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          <a
            href="#servicios"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-200"
          >
            {t.navbar.services}
          </a>

          <a
            href="#soluciones"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-200"
          >
            {t.navbar.solutions}
          </a>

          <a
            href="#como-trabajo"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-200"
          >
            {t.navbar.process}
          </a>

          <a
            href="#industrias"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-200"
          >
            {t.navbar.industries}
          </a>

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="text-sm text-slate-200"
          >
            {t.navbar.contact}
          </a>

          <a
            href="#contacto"
            onClick={() => setMenuOpen(false)}
            className="inline-flex justify-center rounded-full bg-[#1DF2F8] px-6 py-3 text-sm font-semibold text-[#00171F]"
          >
            {t.navbar.call}
          </a>
        </nav>
      )}
    </header>
  );
}

export default Navbar;