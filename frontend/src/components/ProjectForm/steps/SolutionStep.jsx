import { useLanguage } from "../../../hooks/useLanguage";

function SolutionStep({
  formData,
  toggleSolution,
  errors,
}) {
  const { t } = useLanguage();

  const options = [
    {
      value: "customSoftware",
      icon: "dashboard_customize",
      label:
        t.projectForm.solution.options.customSoftware,
    },
    {
      value: "automation",
      icon: "autorenew",
      label: t.projectForm.solution.options.automation,
    },
    {
      value: "integrations",
      icon: "hub",
      label: t.projectForm.solution.options.integrations,
    },
    {
      value: "ai",
      icon: "psychology",
      label: t.projectForm.solution.options.ai,
    },
    {
      value: "webPlatform",
      icon: "language",
      label: t.projectForm.solution.options.webPlatform,
    },
    {
      value: "notSure",
      icon: "help",
      label: t.projectForm.solution.options.notSure,
    },
  ];

  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#1DF2F8]">
        04
      </span>

      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {t.projectForm.solution.title}
      </h2>

      <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
        {t.projectForm.solution.description}
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {options.map((option) => {
          const selected =
            formData.solutionTypes.includes(option.value);

          return (
            <button
              key={option.value}
              type="button"
              onClick={() =>
                toggleSolution(option.value)
              }
              className={`
                flex items-center gap-4 rounded-2xl border p-5 text-left
                transition-all duration-300
                ${
                  selected
                    ? "border-[#1DF2F8]/70 bg-[#1DF2F8]/10 shadow-[0_0_20px_rgba(29,242,248,0.12)]"
                    : "border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-[#1DF2F8]/30 hover:bg-white/[0.065]"
                }
              `}
            >
              <div
                className={`
                  flex h-11 w-11 shrink-0 items-center justify-center rounded-xl
                  ${
                    selected
                      ? "bg-[#1DF2F8] text-[#00171F]"
                      : "bg-white/10 text-[#1DF2F8]"
                  }
                `}
              >
                <span className="material-symbols-outlined text-[22px]">
                  {option.icon}
                </span>
              </div>

              <span className="text-sm font-semibold text-white">
                {option.label}
              </span>
            </button>
          );
        })}
      </div>

      {errors.solutionTypes && (
        <p className="mt-4 text-xs text-red-300">
          {errors.solutionTypes}
        </p>
      )}
    </div>
  );
}

export default SolutionStep;