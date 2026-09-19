import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";

function Solutions() {
  const { t } = useLanguage();
  const [activeDemo, setActiveDemo] = useState("consultas");

  const demos = [
    {
      key: "consultas",
      label: t.solutions.tabs.consultas,
    },
    {
      key: "gestion",
      label: t.solutions.tabs.gestion,
    },
    {
      key: "asistente",
      label: t.solutions.tabs.asistente,
    },
    {
      key: "pagos",
      label: t.solutions.tabs.pagos,
    },
  ];

  return (
    <section
      id="soluciones"
      className="w-full bg-[#00171F] py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Ambient Aurora */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-[#00A8E8]/15 rounded-full blur-[170px] pointer-events-none animate-aurora-2" />

      <div className="absolute bottom-10 left-1/4 w-[450px] h-[450px] bg-[#1DF2F8]/10 rounded-full blur-[140px] pointer-events-none animate-aurora-1" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 flex flex-col gap-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 w-fit">
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#1DF2F8]">
              {t.solutions.badge}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white tracking-tight leading-tight">
            {t.solutions.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.solutions.description}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/[0.04] border border-white/10 max-w-fit backdrop-blur-md">
          {demos.map((demo) => {
            const isActive = activeDemo === demo.key;

            return (
              <button
                key={demo.key}
                type="button"
                onClick={() => setActiveDemo(demo.key)}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all cursor-pointer hover:scale-105 ${
                  isActive
                    ? "text-[#00171F] bg-[#1DF2F8] shadow-[0_0_18px_rgba(29,242,248,0.4)]"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {demo.label}
              </button>
            );
          })}
        </div>

        {/* Demo wrapper */}
        <div className="w-full rounded-2xl bg-white/[0.03] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-2 sm:p-4 backdrop-blur-xl hover:border-cyan-400/30 transition-all">
          {activeDemo === "consultas" && (
            <ConsultasDemo t={t.solutions.consultas} />
          )}

          {activeDemo === "gestion" && (
            <GestionDemo t={t.solutions.gestion} />
          )}

          {activeDemo === "asistente" && (
            <AsistenteDemo t={t.solutions.asistente} />
          )}

          {activeDemo === "pagos" && (
            <PagosDemo t={t.solutions.pagos} />
          )}
        </div>
      </div>
    </section>
  );
}

function ConsultasDemo({ t }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-4 lg:p-6">
      {/* Left */}
      <div className="lg:col-span-5 flex flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DF2F8]/10 border border-[#1DF2F8]/30 text-[#1DF2F8] text-xs font-bold tracking-wider w-fit">
          {t.badge}
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
          {t.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t.description}
        </p>

        <ul className="space-y-3 text-sm text-slate-200">
          {t.bullets.map((item) => (
            <li key={item} className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[#1DF2F8] text-[20px]">
                check_circle
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Right */}
      <div className="lg:col-span-7 p-6 lg:p-8 rounded-2xl bg-[#001D28]/90 border border-white/10 flex flex-col justify-center gap-5 shadow-inner">
        <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
          {t.diagramTitle}
        </div>

        <div className="flex flex-col gap-3">
          {/* Node 1 */}
          <div className="flex items-center gap-4 bg-white/[0.04] border border-white/10 p-4 rounded-xl hover:border-[#1DF2F8]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#1DF2F8]/20 border border-[#1DF2F8]/30 flex items-center justify-center text-[#1DF2F8] font-bold">
              1
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                {t.node1.title}
              </p>

              <p className="text-xs text-slate-400">
                {t.node1.description}
              </p>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-white/10 text-slate-300 text-[10px] font-bold uppercase">
              {t.node1.status}
            </span>
          </div>

          <div className="flex items-center justify-center py-0.5">
            <span className="material-symbols-outlined text-[#1DF2F8] text-[20px] animate-bounce">
              south
            </span>
          </div>

          {/* Node 2 */}
          <div className="flex items-center gap-4 bg-white/[0.04] border border-white/10 p-4 rounded-xl hover:border-[#1DF2F8]/40 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-[#00A8E8]/20 border border-[#00A8E8]/30 flex items-center justify-center text-sky-300 font-bold">
              2
            </div>

            <div className="flex-1">
              <p className="text-sm font-semibold text-white">
                {t.node2.title}
              </p>

              <p className="text-xs text-slate-400">
                {t.node2.description}
              </p>
            </div>

            <span className="px-2.5 py-1 rounded-full bg-sky-950 border border-sky-800 text-sky-300 text-[10px] font-bold uppercase">
              {t.node2.status}
            </span>
          </div>

          <div className="flex items-center justify-center py-0.5">
            <span className="material-symbols-outlined text-[#1DF2F8] text-[20px] animate-bounce">
              south
            </span>
          </div>

          {/* Outcomes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 p-3.5 rounded-xl hover:border-[#1DF2F8]/40 transition-colors">
              <span className="material-symbols-outlined text-[#1DF2F8] text-[22px]">
                database
              </span>

              <div>
                <p className="text-sm font-semibold text-white">
                  {t.outcome1.title}
                </p>

                <p className="text-xs text-slate-400">
                  {t.outcome1.description}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-white/[0.04] border border-white/10 p-3.5 rounded-xl hover:border-emerald-400/40 transition-colors">
              <span className="material-symbols-outlined text-emerald-400 text-[22px]">
                mark_email_read
              </span>

              <div>
                <p className="text-sm font-semibold text-white">
                  {t.outcome2.title}
                </p>

                <p className="text-xs text-slate-400">
                  {t.outcome2.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function GestionDemo({ t }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-4 lg:p-6">
      <div className="lg:col-span-5 flex flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DF2F8]/10 border border-[#1DF2F8]/30 text-[#1DF2F8] text-xs font-bold tracking-wider w-fit">
          {t.badge}
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
          {t.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t.description}
        </p>

        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
          <span className="text-[11px] uppercase tracking-wider font-bold text-[#1DF2F8]">
            {t.advantageTitle}
          </span>

          <p className="text-xs sm:text-sm text-slate-300 mt-1">
            {t.advantageDescription}
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 p-6 rounded-2xl bg-[#001D28]/90 border border-white/10 flex flex-col gap-4 shadow-inner">
        <div className="flex items-center justify-between bg-white/[0.04] border border-white/10 px-4 py-3 rounded-xl">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80" />

            <span className="ml-3 text-xs font-semibold text-slate-200">
              {t.dashboardTitle}
            </span>
          </div>

          <span className="text-[10px] font-bold text-[#1DF2F8] uppercase bg-[#1DF2F8]/10 px-2.5 py-1 rounded-full border border-[#1DF2F8]/20">
            LIVE PREVIEW
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {t.metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="p-4 rounded-xl bg-white/[0.04] border border-white/10"
            >
              <span className="text-xs text-slate-400">
                {metric.label}
              </span>

              <p
                className={`text-xl sm:text-2xl font-bold mt-1 ${
                  index === 1 ? "text-[#1DF2F8]" : "text-white"
                }`}
              >
                {metric.value}
              </p>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10 flex flex-col gap-3">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-bold uppercase tracking-wider pb-2 border-b border-white/10">
            <span>{t.tableHeaders.client}</span>
            <span>{t.tableHeaders.status}</span>
            <span>{t.tableHeaders.time}</span>
          </div>

          {t.rows.map((row) => (
            <div
              key={row.client}
              className="flex items-center justify-between text-xs text-slate-200"
            >
              <span className="font-medium">{row.client}</span>

              <span
                className={`px-2 py-0.5 rounded-full text-[10px] ${
                  row.type === "success"
                    ? "bg-emerald-950 border border-emerald-700 text-emerald-300"
                    : "bg-sky-950 border border-sky-700 text-sky-300"
                }`}
              >
                {row.status}
              </span>

              <span className="text-slate-400">{row.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AsistenteDemo({ t }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-4 lg:p-6">
      <div className="lg:col-span-5 flex flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DF2F8]/10 border border-[#1DF2F8]/30 text-[#1DF2F8] text-xs font-bold tracking-wider w-fit">
          {t.badge}
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
          {t.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t.description}
        </p>

        <div className="flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
          <span className="material-symbols-outlined text-[#1DF2F8]">
            security
          </span>

          <span>{t.security}</span>
        </div>
      </div>

      <div className="lg:col-span-7 p-6 rounded-2xl bg-[#001D28]/90 border border-white/10 flex flex-col gap-4 shadow-inner">
        <div className="bg-white/[0.04] border border-white/10 p-4 rounded-xl flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-slate-200 shrink-0">
            <span className="material-symbols-outlined text-[18px]">
              person
            </span>
          </div>

          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              {t.questionLabel}
            </span>

            <p className="text-sm text-white mt-1">{t.question}</p>
          </div>
        </div>

        <div className="flex items-center gap-3 px-4 py-2 rounded-lg bg-white/[0.02] border border-white/5 text-[#1DF2F8] text-xs">
          <span className="material-symbols-outlined text-[18px] animate-spin">
            sync
          </span>

          <span>
            {t.searching}{" "}
            <strong className="text-white">{t.source}</strong>
          </span>
        </div>

        <div className="bg-white/[0.04] border border-white/10 p-4 rounded-xl flex items-start gap-3">
          <div className="w-8 h-8 rounded-full bg-[#1DF2F8]/20 border border-[#1DF2F8]/30 flex items-center justify-center text-[#1DF2F8] shrink-0">
            <span className="material-symbols-outlined text-[18px]">
              smart_toy
            </span>
          </div>

          <div className="space-y-2">
            <span className="text-[10px] font-bold text-[#1DF2F8] uppercase tracking-wider">
              {t.answerLabel}
            </span>

            <p className="text-sm text-slate-200 leading-relaxed">
              {t.answer}
            </p>

            <span className="inline-block text-[10px] font-medium text-slate-300 bg-white/10 px-2 py-0.5 rounded">
              {t.sourceLabel}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function PagosDemo({ t }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch p-4 lg:p-6">
      <div className="lg:col-span-5 flex flex-col justify-center gap-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1DF2F8]/10 border border-[#1DF2F8]/30 text-[#1DF2F8] text-xs font-bold tracking-wider w-fit">
          {t.badge}
        </div>

        <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">
          {t.title}
        </h3>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {t.description}
        </p>

        <div className="p-4 rounded-xl bg-white/[0.04] border border-white/10">
          <p className="text-xs sm:text-sm text-slate-300">
            <strong className="text-white">{t.zeroAbsenceTitle}</strong>{" "}
            {t.zeroAbsenceDescription}
          </p>
        </div>
      </div>

      <div className="lg:col-span-7 p-6 rounded-2xl bg-[#001D28]/90 border border-white/10 flex flex-col justify-center gap-4 shadow-inner">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          {t.steps.map((step) => (
            <div
              key={step.title}
              className="bg-white/[0.04] border border-white/10 p-3 rounded-xl flex flex-col items-center gap-2"
            >
              <span
                className={`material-symbols-outlined ${
                  step.type === "success"
                    ? "text-emerald-400"
                    : "text-[#1DF2F8]"
                }`}
              >
                {step.icon}
              </span>

              <span className="text-[10px] font-bold uppercase text-slate-300">
                {step.title}
              </span>

              <span className="text-xs text-slate-400">
                {step.description}
              </span>
            </div>
          ))}
        </div>

        <div className="bg-white/[0.04] border border-white/10 p-4 rounded-xl mt-2 text-center text-slate-300 text-xs sm:text-sm">
          <span className="font-bold text-[#1DF2F8]">
            {t.resultTitle}
          </span>{" "}
          {t.result}
        </div>
      </div>
    </div>
  );
}

export default Solutions;