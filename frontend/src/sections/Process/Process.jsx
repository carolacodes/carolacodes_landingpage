import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";

function Process() {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(null);

  return (
    <section
      id="como-trabajo"
      className="w-full bg-[#FAFCFF] py-24 lg:py-32 text-slate-900 border-t border-slate-200 relative overflow-hidden"
    >
      {/* Aurora */}
      <div className="absolute top-1/2 right-10 w-[550px] h-[550px] bg-[#CFEFF9]/35 rounded-full blur-[130px] pointer-events-none animate-light-aurora" />

      <div className="max-w-[1500px] mx-auto px-6 lg:px-10 flex flex-col gap-16 relative z-10">
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

        {/* Desktop */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-[minmax(0,1fr)_90px_minmax(0,1fr)_90px_minmax(0,1fr)_90px_minmax(0,1fr)] items-center">
            {t.process.steps.map((step, index) => (
              <div key={step.number} className="contents">
                {/* Card */}
                <article
                  onMouseEnter={() => setActiveStep(index)}
                  onMouseLeave={() => setActiveStep(null)}
                  className={`
                    process-card-premium
                    min-h-[350px]
                    rounded-3xl
                    bg-white
                    border
                    p-8
                    flex
                    flex-col
                    justify-between
                    cursor-pointer

                    ${
                      activeStep === index
                        ? "process-card-premium-active"
                        : "border-slate-200/90"
                    }
                  `}
                >
                  <div>
                    <span
                      className={`
                        block
                        text-5xl
                        font-extrabold
                        tracking-tight
                        transition-all
                        duration-300

                        ${
                          activeStep === index
                            ? "text-[#1DF2F8]"
                            : "text-[#00A8E8]"
                        }
                      `}
                    >
                      {step.number}
                    </span>

                    <h3 className="mt-5 text-xl font-bold text-[#00171F]">
                      {step.title}
                    </h3>

                    <p className="mt-5 text-sm sm:text-[15px] leading-[1.75] text-slate-600">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-10 border-t border-slate-100 pt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007EA7]">
                    <span className="material-symbols-outlined text-[18px]">
                      {step.icon}
                    </span>

                    <span>{step.footer}</span>
                  </div>
                </article>

                {/* Connector */}
                {index < t.process.steps.length - 1 && (
                  <div className="relative flex items-center justify-center h-full">
                    {/* Base line */}
                    <div className="absolute left-0 right-0 h-[2px] bg-slate-200 rounded-full" />

                    {/* Active line */}
                    <div
                      className={`
                        absolute
                        left-0
                        h-[3px]
                        rounded-full
                        process-flow-line

                        ${
                          activeStep !== null && activeStep >= index
                            ? "process-flow-line-active"
                            : ""
                        }
                      `}
                    />

                    {/* Node */}
                    <div
                      className={`
                        relative
                        z-10
                        h-4
                        w-4
                        rounded-full
                        border-2
                        bg-white
                        transition-all
                        duration-300

                        ${
                          activeStep !== null && activeStep >= index
                            ? "border-[#1DF2F8] shadow-[0_0_18px_rgba(29,242,248,0.85)] scale-125"
                            : "border-[#00A8E8]/50"
                        }
                      `}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tablet / Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:hidden">
          {t.process.steps.map((step) => (
            <article
              key={step.number}
              className="rounded-3xl bg-white border border-slate-200/90 p-8 shadow-sm"
            >
              <span className="text-5xl font-extrabold text-[#00A8E8]">
                {step.number}
              </span>

              <h3 className="mt-5 text-xl font-bold text-[#00171F]">
                {step.title}
              </h3>

              <p className="mt-5 text-sm leading-[1.75] text-slate-600">
                {step.description}
              </p>

              <div className="mt-10 border-t border-slate-100 pt-5 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#007EA7]">
                <span className="material-symbols-outlined text-[18px]">
                  {step.icon}
                </span>

                <span>{step.footer}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;