import { useLanguage } from "../../hooks/useLanguage";

function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="servicios"
      className="w-full bg-[#FAFCFF] py-24 lg:py-32 text-slate-900 border-t border-slate-200/80 relative overflow-hidden"
    >
      {/* Subtle light aurora animation background */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-[#CFEFF9]/40 rounded-full blur-[140px] pointer-events-none animate-light-aurora" />

      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#EAF7FC]/60 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#007EA7]">
            {t.services.badge}
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#00171F] tracking-tight leading-tight">
            {t.services.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="saas-card-interactive rounded-2xl bg-white p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-6 group cursor-pointer">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-[#007EA7] flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[26px]">
                  autorenew
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#00171F]">
                {t.services.manual.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.services.manual.description}
              </p>
            </div>

            {/* Micro diagram */}
            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-3">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>{t.services.manual.diagramTitle}</span>

                <span className="text-[#007EA7] font-bold">
                  {t.services.manual.diagramResult}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1">
                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-xs">
                  <span className="material-symbols-outlined text-[#007EA7] text-[18px]">
                    draft
                  </span>

                  <span className="text-xs font-semibold text-slate-800">
                    {t.services.manual.step1}
                  </span>
                </div>

                <span className="material-symbols-outlined text-slate-400 text-[18px]">
                  arrow_forward
                </span>

                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-xs">
                  <span className="material-symbols-outlined text-[#00A8E8] text-[18px]">
                    terminal
                  </span>

                  <span className="text-xs font-semibold text-slate-800">
                    {t.services.manual.step2}
                  </span>
                </div>

                <span className="material-symbols-outlined text-slate-400 text-[18px]">
                  arrow_forward
                </span>

                <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-xs">
                  <span className="material-symbols-outlined text-emerald-600 text-[18px]">
                    send
                  </span>

                  <span className="text-xs font-semibold text-slate-800">
                    {t.services.manual.step3}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="saas-card-interactive rounded-2xl bg-white p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-6 group cursor-pointer">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-[#007EA7] flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[26px]">
                  hub
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#00171F]">
                {t.services.connected.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.services.connected.description}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>{t.services.connected.diagramTitle}</span>

                <span className="text-emerald-700 font-bold">
                  {t.services.connected.diagramResult}
                </span>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
                <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs font-semibold text-slate-800 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-[#007EA7] text-[18px]">
                    chat
                  </span>

                  {t.services.connected.step1}
                </div>

                <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-900 font-bold flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-[#00A8E8] text-[18px]">
                    sync_alt
                  </span>

                  {t.services.connected.step2}
                </div>

                <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-xs font-semibold text-slate-800 flex flex-col items-center gap-1">
                  <span className="material-symbols-outlined text-[#007EA7] text-[18px]">
                    dataset
                  </span>

                  {t.services.connected.step3}
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="saas-card-interactive rounded-2xl bg-white p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-6 group cursor-pointer">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-[#007EA7] flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[26px]">
                  dashboard_customize
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#00171F]">
                {t.services.system.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.services.system.description}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>{t.services.system.diagramTitle}</span>

                <span className="text-[#007EA7] font-bold">
                  {t.services.system.diagramResult}
                </span>
              </div>

              <div className="space-y-2 pt-1">
                <div className="h-6 w-full rounded-md bg-white border border-slate-200 shadow-xs flex items-center justify-between px-3">
                  <span className="w-16 h-2 rounded bg-slate-200" />
                  <span className="w-8 h-2 rounded bg-cyan-400" />
                </div>

                <div className="h-6 w-full rounded-md bg-white border border-slate-200 shadow-xs flex items-center justify-between px-3">
                  <span className="w-24 h-2 rounded bg-slate-200" />
                  <span className="w-12 h-2 rounded bg-[#00A8E8]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="saas-card-interactive rounded-2xl bg-white p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-6 group cursor-pointer">
            <div className="flex flex-col gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-100 text-[#007EA7] flex items-center justify-center transition-transform group-hover:scale-110">
                <span className="material-symbols-outlined text-[26px]">
                  psychology
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#00171F]">
                {t.services.ai.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t.services.ai.description}
              </p>
            </div>

            <div className="rounded-xl bg-slate-50 border border-slate-100 p-4 flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                <span>{t.services.ai.diagramTitle}</span>

                <span className="text-[#007EA7] font-bold">
                  {t.services.ai.diagramResult}
                </span>
              </div>

              <div className="flex items-center justify-between gap-2 pt-1 text-center text-xs">
                <div className="flex-1 py-1.5 px-2 bg-white border border-slate-200 rounded-md font-medium text-slate-700">
                  {t.services.ai.step1}
                </div>

                <span className="text-[#007EA7] font-bold">→</span>

                <div className="flex-1 py-1.5 px-2 bg-cyan-50 border border-cyan-200 text-cyan-900 font-semibold rounded-md">
                  {t.services.ai.step2}
                </div>

                <span className="text-[#007EA7] font-bold">→</span>

                <div className="flex-1 py-1.5 px-2 bg-white border border-slate-200 rounded-md font-medium text-slate-800">
                  {t.services.ai.step3}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;