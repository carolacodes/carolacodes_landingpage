import { useLanguage } from "../../hooks/useLanguage";

function FormProgress({ currentStep, totalSteps }) {
  const { t } = useLanguage();

  const progress = (currentStep / totalSteps) * 100;

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          {t.projectForm.progress.step} {currentStep}{" "}
          {t.projectForm.progress.of} {totalSteps}
        </span>

        <span className="text-xs font-bold text-[#1DF2F8]">
          {Math.round(progress)}%
        </span>
      </div>

      <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#00A8E8] to-[#1DF2F8] shadow-[0_0_14px_rgba(29,242,248,0.55)] transition-all duration-500"
          style={{
            width: `${progress}%`,
          }}
        />
      </div>
    </div>
  );
}

export default FormProgress;