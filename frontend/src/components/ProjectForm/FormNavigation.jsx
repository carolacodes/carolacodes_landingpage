import { useLanguage } from "../../hooks/useLanguage";

function FormNavigation({
  currentStep,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
  loading,
}) {
  const { t } = useLanguage();

  const isLastStep = currentStep === totalSteps;

  return (
    <div className="mt-10 flex items-center justify-between border-t border-white/10 pt-6">
      <div>
        {currentStep > 1 && (
          <button
            type="button"
            onClick={onPrevious}
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10 disabled:opacity-50"
          >
            <span className="material-symbols-outlined text-[18px]">
              arrow_back
            </span>

            {t.projectForm.navigation.previous}
          </button>
        )}
      </div>

      {!isLastStep ? (
        <button
          type="button"
          onClick={onNext}
          className="inline-flex items-center gap-2 rounded-full bg-[#1DF2F8] px-6 py-3 text-sm font-bold text-[#00171F] shadow-[0_0_24px_rgba(29,242,248,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(29,242,248,0.6)]"
        >
          {t.projectForm.navigation.next}

          <span className="material-symbols-outlined text-[18px]">
            arrow_forward
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={onSubmit}
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-[#1DF2F8] px-6 py-3 text-sm font-bold text-[#00171F] shadow-[0_0_24px_rgba(29,242,248,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(29,242,248,0.6)] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? (
            <>
              <span className="material-symbols-outlined animate-spin text-[18px]">
                progress_activity
              </span>

              {t.projectForm.navigation.sending}
            </>
          ) : (
            <>
              {t.projectForm.navigation.submit}

              <span className="material-symbols-outlined text-[18px]">
                send
              </span>
            </>
          )}
        </button>
      )}
    </div>
  );
}

export default FormNavigation;