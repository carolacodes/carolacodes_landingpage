import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "../../hooks/useLanguage";
import { createWhatsAppUrl } from "../../utils/whatsapp";
import { Link } from "react-router-dom";
function FloatingActions() {
  const { t } = useLanguage();
  const location = useLocation();

  const isDiagnosticPage = location.pathname === "/diagnostico";

  const [showFormBubble, setShowFormBubble] = useState(true);
  const [whatsappAttention, setWhatsappAttention] = useState(false);

  const whatsappUrl = createWhatsAppUrl(
    "5493794404000",
    t.contact.whatsapp.message
  );


  useEffect(() => {
    let hideTimeout;

    const showBubble = () => {
      setShowFormBubble(true);

      hideTimeout = setTimeout(() => {
        setShowFormBubble(false);
      }, 4000);
    };

    showBubble();

    const interval = setInterval(showBubble, 14000);

    return () => {
      clearInterval(interval);
      clearTimeout(hideTimeout);
    };
  }, []);

  useEffect(() => {
    let attentionTimeout;

    const triggerAttention = () => {
      setWhatsappAttention(true);

      attentionTimeout = setTimeout(() => {
        setWhatsappAttention(false);
      }, 2500);
    };

    const interval = setInterval(triggerAttention, 18000);

    return () => {
      clearInterval(interval);
      clearTimeout(attentionTimeout);
    };
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[80] flex flex-col items-end gap-7 pointer-events-none">
      {/* FORMULARIO - solo fuera de /diagnostico */}
      {!isDiagnosticPage && (
        <div className="flex items-center gap-4">
          <div
            className={`
              pointer-events-none
              hidden sm:flex
              min-h-[74px]
              min-w-[290px]
              flex-col
              justify-center
              rounded-3xl
              border
              border-white/10
              bg-[#00171F]/95
              px-6
              py-4
              text-white
              shadow-xl
              backdrop-blur-xl
              transition-all
              duration-500
              ${
                showFormBubble
                  ? "translate-x-0 opacity-100 scale-100"
                  : "translate-x-4 opacity-0 scale-95"
              }
            `}
          >
            <span className="text-lg font-bold leading-tight">
              {t.floating.formTitle}
            </span>

            <span className="mt-1 text-sm text-slate-300">
              {t.floating.formText}
            </span>
          </div>

          <Link
            to="/diagnostico"
            aria-label={t.floating.formTitle}
            className="pointer-events-auto floating-soft flex h-16 w-16 items-center justify-center rounded-full border border-[#1DF2F8]/40 bg-[#00171F] text-[#1DF2F8] shadow-[0_0_24px_rgba(29,242,248,0.25)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_32px_rgba(29,242,248,0.55)]"
          >
            <span className="material-symbols-outlined text-[28px]">
              description
            </span>
          </Link>
        </div>
      )}

      {/* WHATSAPP - siempre visible */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className={`
          pointer-events-auto
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-full
          bg-[#1DF2F8]
          text-[#00171F]
          shadow-[0_0_28px_rgba(29,242,248,0.55)]
          transition-all
          duration-300
          hover:scale-110
          hover:shadow-[0_0_38px_rgba(29,242,248,0.8)]
          ${
            whatsappAttention
              ? "whatsapp-button-attention"
              : "floating-soft"
          }
        `}
      >
        <span className="absolute inset-0 rounded-full border border-[#1DF2F8] animate-ping opacity-20" />

        <span
          className={`
            absolute
            -right-1
            -top-1
            z-20
            flex
            h-6
            w-6
            items-center
            justify-center
            rounded-full
            bg-red-500
            text-[11px]
            font-bold
            text-white
            shadow-lg
            transition-all
            duration-300
            ${
              whatsappAttention
                ? "scale-100 opacity-100"
                : "scale-0 opacity-0"
            }
          `}
        >
          1
        </span>

        <svg
          viewBox="0 0 32 32"
          className={`
            relative
            z-10
            h-8
            w-8
            fill-current
            ${whatsappAttention ? "whatsapp-icon-shake" : ""}
          `}
          aria-hidden="true"
        >
          <path d="M19.11 17.32c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.59-1.5-1.86-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.93 2.95 4.68 4.14.65.28 1.16.45 1.56.58.66.21 1.26.18 1.73.11.53-.08 1.59-.65 1.81-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
          <path d="M26.67 5.33A14.91 14.91 0 0016.05.94C7.74.94.98 7.7.98 16.01c0 2.66.7 5.26 2.03 7.54L.85 31.44l8.08-2.12a15 15 0 007.12 1.81h.01c8.31 0 15.07-6.76 15.07-15.07 0-4.02-1.56-7.8-4.46-10.73zM16.06 28.6h-.01a12.46 12.46 0 01-6.35-1.74l-.46-.27-4.79 1.26 1.28-4.67-.3-.48a12.5 12.5 0 01-1.92-6.69c0-6.91 5.63-12.54 12.55-12.54 3.35 0 6.49 1.3 8.85 3.68a12.45 12.45 0 013.67 8.87c0 6.91-5.62 12.58-12.52 12.58z" />
        </svg>
      </a>
    </div>
  );
}

export default FloatingActions;