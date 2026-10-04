import { useLanguage } from "../../../hooks/useLanguage";

function ProjectStageStep({
  formData,
  updateField,
  errors,
}) {
  const { t } = useLanguage();

  const stageOptions = [
    ["idea", t.projectForm.stage.options.idea],
    [
      "definedProcess",
      t.projectForm.stage.options.definedProcess,
    ],
    [
      "existingTools",
      t.projectForm.stage.options.existingTools,
    ],
    [
      "existingSystem",
      t.projectForm.stage.options.existingSystem,
    ],
  ];

  const budgetOptions = [
    ["unknown", t.projectForm.budget.options.unknown],
    [
      "under500",
      t.projectForm.budget.options.under500,
    ],
    [
      "500-1000",
      t.projectForm.budget.options.from500to1000,
    ],
    [
      "1000-3000",
      t.projectForm.budget.options.from1000to3000,
    ],
    [
      "3000plus",
      t.projectForm.budget.options.over3000,
    ],
    [
      "preferToDiscuss",
      t.projectForm.budget.options.preferToDiscuss,
    ],
  ];

  const optionClass = (selected) => `
    rounded-2xl border p-4 text-left text-sm font-semibold transition-all duration-300
    ${
      selected
        ? "border-[#1DF2F8]/70 bg-[#1DF2F8]/10 text-white shadow-[0_0_18px_rgba(29,242,248,0.1)]"
        : "border-white/10 bg-white/[0.04] text-slate-200 hover:border-[#1DF2F8]/30 hover:bg-white/[0.065]"
    }
  `;

  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#1DF2F8]">
        05
      </span>

      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {t.projectForm.stage.title}
      </h2>

      <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
        {t.projectForm.stage.description}
      </p>

      <div className="mt-8">
        <h3 className="text-sm font-semibold text-white">
          {t.projectForm.stage.question}
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {stageOptions.map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                updateField("projectStage", value)
              }
              className={optionClass(
                formData.projectStage === value
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {errors.projectStage && (
          <p className="mt-3 text-xs text-red-300">
            {errors.projectStage}
          </p>
        )}
      </div>

      <div className="mt-10">
        <h3 className="text-sm font-semibold text-white">
          {t.projectForm.budget.question}
        </h3>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {budgetOptions.map(([value, label]) => (
            <button
              key={value}
              type="button"
              onClick={() =>
                updateField("budget", value)
              }
              className={optionClass(
                formData.budget === value
              )}
            >
              {label}
            </button>
          ))}
        </div>

        {errors.budget && (
          <p className="mt-3 text-xs text-red-300">
            {errors.budget}
          </p>
        )}
      </div>
    </div>
  );
}

export default ProjectStageStep;