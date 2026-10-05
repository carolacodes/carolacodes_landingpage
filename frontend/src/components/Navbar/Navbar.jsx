import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { getCalUrl } from "../../utils/cal";
import { scrollToSection } from "../../utils/scrollToSection";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const { t, language, toggleLanguage } = useLanguage();

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const calUrl = getCalUrl();

  const navItems = [
    {
      id: "servicios",
      label: t.navbar.services,
    },
    {
      id: "soluciones",
      label: t.navbar.solutions,
    },
    {
      id: "como-trabajo",
      label: t.navbar.process,
    },
    {
      id: "industrias",
      label: t.navbar.industries,
    },
    {
      id: "contacto",
      label: t.navbar.contact,
    },
  ];

  const handleNavigation = (id) => {
    setMenuOpen(false);

    // Si ya estamos en la landing, hacemos scroll normal
    if (location.pathname === "/") {
      scrollToSection(id);
      return;
    }

    // Si estamos en otra ruta, por ejemplo /diagnostico,
    // volvemos primero a la landing
    navigate("/");

    // Esperamos a que Home se renderice y recién ahí hacemos scroll
    setTimeout(() => {
      scrollToSection(id);
    }, 150);
  };

  const handleHome = () => {
    setMenuOpen(false);

    // Si ya estamos en Home, volvemos arriba suavemente
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Si estamos en /diagnostico u otra página,
    // volvemos directamente a Home
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#00171F]/80 backdrop-blur-xl border-b border-white/[0.08]">
      <div className="h-20 max-w-[1240px] mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">

        {/* Brand */}
        <button
          type="button"
          onClick={handleHome}
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 flex items-center justify-center logo-bounce">
            <img
              src="/icon.svg"
              alt="CarolaCodes"
              className="w-full h-full object-contain"
            />
          </div>

          <span className="font-extrabold text-xl tracking-tight text-white">
            Carola
            <span className="text-[#1DF2F8]">
              Codes
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                handleNavigation(item.id)
              }
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">

          {/* Contact / WhatsApp section */}
          <button
            type="button"
            onClick={() =>
              handleNavigation("contacto")
            }
            className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-full bg-white/[0.06] border border-white/10 text-slate-200 text-sm font-semibold hover:bg-white/[0.12] hover:text-white transition-all"
          >
            WhatsApp
          </button>

          {/* Cal.com */}
          <a
            className="hidden md:inline-flex items-center justify-center h-10 px-6 rounded-full bg-[#1DF2F8] text-[#00171F] font-semibold text-sm shadow-[0_0_24px_-2px_rgba(29,242,248,0.5)] hover:shadow-[0_0_32px_0px_rgba(29,242,248,0.75)] hover:-translate-y-0.5 transition-all"
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.navbar.call}
          </a>

          {/* Language */}
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label="Cambiar idioma"
            className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center flex-shrink-0 ml-1 text-[10px] font-bold text-slate-200 hover:bg-white/20 transition"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          {/* Mobile menu */}
          <button
            type="button"
            onClick={() =>
              setMenuOpen((prev) => !prev)
            }
            aria-label="Abrir menú"
            className="xl:hidden w-9 h-9 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white"
          >
            <span className="material-symbols-outlined text-[20px]">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="xl:hidden bg-[#00171F]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-5">

          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() =>
                handleNavigation(item.id)
              }
              className="text-left text-sm text-slate-200 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}

          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              setMenuOpen(false)
            }
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