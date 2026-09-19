import { useLanguage } from "../../hooks/useLanguage";

function Process() {
  const { t } = useLanguage();

  return (
    <section
      id="como-trabajo"
      className="w-full bg-[#FAFCFF] py-24 lg:py-32 text-slate-900 border-t border-slate-200 relative overflow-hidden"
    >
      {/* Ambient Light Aurora */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#CFEFF9]/35 rounded-full blur-[130px] pointer-events-none animate-light-aurora" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#007EA7]">
            {t.process.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#00171F] tracking-tight leading-tight">
            {t.process.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.process.description}
          </p>
        </div>

        {/* Process Cards */}
        <div className="relative w-full">
          {/* Continuous luminous line */}
          <div className="hidden lg:block process-luminous-track" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {t.process.steps.map((step, index) => (
              <div
                key={step.number}
                className="process-step-card relative"
              >
                {/* Node on luminous line */}
                <div
                  className={`hidden lg:block absolute top-[3.25rem] left-8 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-white border-2 ${
                    index === 0 || index === 3
                      ? "border-[#1DF2F8] shadow-[0_0_10px_rgba(29,242,248,0.7)]"
                      : "border-[#00A8E8] shadow-[0_0_10px_rgba(0,168,232,0.7)]"
                  } z-20 step-node-dot transition-all duration-300`}
                />

                <div className="saas-card-interactive h-full rounded-2xl bg-white p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-8 group cursor-pointer">
                  <div className="flex flex-col gap-4">
                    <span className="text-5xl font-extrabold text-[#00A8E8] tracking-tight group-hover:text-cyan-500 transition-all duration-300 step-badge">
                      {step.number}
                    </span>

                    <h3 className="text-xl font-bold text-[#00171F]">
                      {step.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-2 text-[#007EA7] text-xs font-bold uppercase tracking-wider border-t border-slate-100">
                    <span className="material-symbols-outlined text-[18px]">
                      {step.icon}
                    </span>

                    <span>{step.footer}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Process;