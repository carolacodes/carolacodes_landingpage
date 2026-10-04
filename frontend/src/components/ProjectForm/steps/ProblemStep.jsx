import { useLanguage } from "../../../hooks/useLanguage";

function ProblemStep({
  formData,
  updateField,
  errors,
}) {
  const { t } = useLanguage();

  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#1DF2F8]">
        02
      </span>

      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {t.projectForm.problem.title}
      </h2>

      <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
        {t.projectForm.problem.description}
      </p>

      <textarea
        rows={8}
        className="mt-8 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.055] px-5 py-4 text-sm leading-relaxed text-white outline-none transition placeholder:text-slate-500 focus:border-[#1DF2F8]/60 focus:bg-white/[0.075] focus:ring-4 focus:ring-[#1DF2F8]/10"
        placeholder={t.projectForm.problem.placeholder}
        value={formData.problem}
        onChange={(event) =>
          updateField("problem", event.target.value)
        }
      />

      {errors.problem && (
        <p className="mt-2 text-xs text-red-300">
          {errors.problem}
        </p>
      )}
    </div>
  );
}

export default ProblemStep;