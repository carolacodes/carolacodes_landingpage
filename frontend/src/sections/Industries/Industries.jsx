import { useLanguage } from "../../hooks/useLanguage";

function Industries() {
  const { t } = useLanguage();

  const industries = [
    {
      key: "professional",
      icon: "gavel",
    },
    {
      key: "ecommerce",
      icon: "shopping_bag",
    },
    {
      key: "education",
      icon: "school",
    },
    {
      key: "health",
      icon: "medical_services",
    },
    {
      key: "realestate",
      icon: "apartment",
    },
    {
      key: "operations",
      icon: "engineering",
    },
  ];

  return (
    <section
      id="industrias"
      className="w-full bg-gradient-to-b from-[#F0F8FC] to-[#FFFFFF] py-24 lg:py-32 text-slate-900 border-t border-slate-200/60 relative overflow-hidden"
    >
      {/* Subtle light aurora */}
      <div className="absolute top-1/4 left-1/3 w-[640px] h-[640px] bg-[#CFEFF9]/30 rounded-full blur-[140px] pointer-events-none animate-light-aurora" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#007EA7]">
            {t.industries.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#00171F] tracking-tight leading-tight">
            {t.industries.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.industries.description}
          </p>
        </div>

        {/* Industry cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => {
            const item = t.industries.items[industry.key];

            return (
              <div
                key={industry.key}
                className="saas-card-interactive group p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between gap-6 relative cursor-pointer"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-[#007EA7] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-[24px]">
                      {industry.icon}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#00171F]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* CTA revealed on hover */}
                <div className="pt-2">
                  <a
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00A8E8] group-hover:text-[#00171F] md:opacity-0 md:translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200"
                    href="#contacto"
                  >
                    <span>{t.industries.consult}</span>

                    <span className="material-symbols-outlined text-[16px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom banner */}
        <div className="rounded-3xl bg-white p-8 lg:p-12 border border-slate-200/80 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8 hover:border-cyan-400/40 transition-all">
          <div className="flex flex-col gap-2 max-w-xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-[#00171F]">
              {t.industries.otherTitle}
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {t.industries.otherDescription}
            </p>
          </div>

          <a
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#00171F] text-white hover:bg-slate-800 font-semibold text-sm shadow-md hover:scale-105 hover:-translate-y-0.5 transition-all shrink-0"
            href="#contacto"
          >
            <span>{t.industries.otherCta}</span>

            <span className="material-symbols-outlined text-[#1DF2F8] text-[18px]">
              arrow_forward
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Industries;