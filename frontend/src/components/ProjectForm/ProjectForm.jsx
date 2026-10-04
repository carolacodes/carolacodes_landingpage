import { useState } from "react";
import { useLanguage } from "../../hooks/useLanguage";
import { sendProjectForm } from "../../api/contact.api";

import FormProgress from "./FormProgress";
import FormNavigation from "./FormNavigation";

import ContactStep from "./steps/ContactStep";
import ProblemStep from "./steps/ProblemStep";
import CurrentProcessStep from "./steps/CurrentProcessStep";
import SolutionStep from "./steps/SolutionStep";
import ProjectStageStep from "./steps/ProjectStageStep";

const INITIAL_FORM_DATA = {
  name: "",
  email: "",
  whatsapp: "",
  business: "",
  problem: "",
  currentProcess: "",
  solutionTypes: [],
  projectStage: "",
  budget: "",
};

function ProjectForm() {
  const { t, language } = useLanguage();

  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState({});

  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: "",
  });

  const totalSteps = 5;

  const updateField = (field, value) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: "",
    }));
  };

  const toggleSolution = (value) => {
    setFormData((current) => {
      const exists = current.solutionTypes.includes(value);

      return {
        ...current,
        solutionTypes: exists
          ? current.solutionTypes.filter((item) => item !== value)
          : [...current.solutionTypes, value],
      };
    });

    setErrors((current) => ({
      ...current,
      solutionTypes: "",
    }));
  };

  const validateCurrentStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.name.trim()) {
        newErrors.name = t.projectForm.errors.name;
      }

      if (!formData.email.trim()) {
        newErrors.email = t.projectForm.errors.email;
      } else if (
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ) {
        newErrors.email = t.projectForm.errors.invalidEmail;
      }
    }

    if (currentStep === 2) {
      if (formData.problem.trim().length < 10) {
        newErrors.problem = t.projectForm.errors.problem;
      }
    }

    if (currentStep === 3) {
      if (formData.currentProcess.trim().length < 10) {
        newErrors.currentProcess =
          t.projectForm.errors.currentProcess;
      }
    }

    if (currentStep === 4) {
      if (formData.solutionTypes.length === 0) {
        newErrors.solutionTypes =
          t.projectForm.errors.solutionTypes;
      }
    }

    if (currentStep === 5) {
      if (!formData.projectStage) {
        newErrors.projectStage =
          t.projectForm.errors.projectStage;
      }

      if (!formData.budget) {
        newErrors.budget = t.projectForm.errors.budget;
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (!validateCurrentStep()) return;

    setCurrentStep((current) =>
      Math.min(current + 1, totalSteps)
    );
  };

  const previousStep = () => {
    setErrors({});

    setCurrentStep((current) =>
      Math.max(current - 1, 1)
    );
  };

  const handleSubmit = async () => {
    if (!validateCurrentStep()) return;

    setStatus({
      loading: true,
      success: false,
      error: "",
    });

    try {
      await sendProjectForm({
        ...formData,
        language,
      });

      setStatus({
        loading: false,
        success: true,
        error: "",
      });
    } catch (error) {
      console.error(error);

      setStatus({
        loading: false,
        success: false,
        error:
          error.response?.data?.message ||
          t.projectForm.errors.submit,
      });
    }
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(1);
    setErrors({});

    setStatus({
      loading: false,
      success: false,
      error: "",
    });
  };

  return (
    <section className="relative overflow-hidden bg-[#00171F] px-4 py-16 sm:px-6 lg:px-8">
      {/* Auroras */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[520px] w-[700px] -translate-x-1/2 rounded-full bg-[#1DF2F8]/10 blur-[150px] animate-aurora-1" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-[#00A8E8]/10 blur-[140px] animate-aurora-2" />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {/* Header */}
          <div className="border-b border-white/10 px-6 py-6 sm:px-10">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#1DF2F8]">
                CarolaCodes
              </span>

              <h1 className="text-2xl font-bold text-white sm:text-3xl">
                {t.projectForm.headerTitle}
              </h1>

              <p className="max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
                {t.projectForm.headerDescription}
              </p>
            </div>

            <div className="mt-6">
              <FormProgress
                currentStep={currentStep}
                totalSteps={totalSteps}
              />
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 sm:px-10 sm:py-10">
            {status.success ? (
              <div className="py-10 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-[#1DF2F8]/30 bg-[#1DF2F8]/10 text-[#1DF2F8]">
                  <span className="material-symbols-outlined text-[32px]">
                    check_circle
                  </span>
                </div>

                <h2 className="mt-6 text-3xl font-bold text-white">
                  {t.projectForm.success.title}
                </h2>

                <p className="mx-auto mt-4 max-w-xl leading-relaxed text-slate-300">
                  {t.projectForm.success.description}
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.projectForm.success.newForm}
                </button>
              </div>
            ) : (
              <>
                <div className="min-h-[420px]">
                  {currentStep === 1 && (
                    <ContactStep
                      formData={formData}
                      updateField={updateField}
                      errors={errors}
                    />
                  )}

                  {currentStep === 2 && (
                    <ProblemStep
                      formData={formData}
                      updateField={updateField}
                      errors={errors}
                    />
                  )}

                  {currentStep === 3 && (
                    <CurrentProcessStep
                      formData={formData}
                      updateField={updateField}
                      errors={errors}
                    />
                  )}

                  {currentStep === 4 && (
                    <SolutionStep
                      formData={formData}
                      toggleSolution={toggleSolution}
                      errors={errors}
                    />
                  )}

                  {currentStep === 5 && (
                    <ProjectStageStep
                      formData={formData}
                      updateField={updateField}
                      errors={errors}
                    />
                  )}
                </div>

                {status.error && (
                  <div className="mt-6 rounded-2xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                    {status.error}
                  </div>
                )}

                <FormNavigation
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  onPrevious={previousStep}
                  onNext={nextStep}
                  onSubmit={handleSubmit}
                  loading={status.loading}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectForm;