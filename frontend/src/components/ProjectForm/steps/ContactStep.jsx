import { useLanguage } from "../../../hooks/useLanguage";

function ContactStep({
  formData,
  updateField,
  errors,
}) {
  const { t } = useLanguage();

  const inputClass =
    "mt-2 w-full rounded-2xl border border-white/10 bg-white/[0.055] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-[#1DF2F8]/60 focus:bg-white/[0.075] focus:ring-4 focus:ring-[#1DF2F8]/10";

  return (
    <div>
      <span className="text-xs font-bold uppercase tracking-widest text-[#1DF2F8]">
        01
      </span>

      <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
        {t.projectForm.contact.title}
      </h2>

      <p className="mt-3 max-w-2xl leading-relaxed text-slate-300">
        {t.projectForm.contact.description}
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-slate-200">
            {t.projectForm.contact.name}
          </label>

          <input
            type="text"
            className={inputClass}
            value={formData.name}
            onChange={(event) =>
              updateField("name", event.target.value)
            }
          />

          {errors.name && (
            <p className="mt-2 text-xs text-red-300">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-200">
            {t.projectForm.contact.email}
          </label>

          <input
            type="email"
            className={inputClass}
            value={formData.email}
            onChange={(event) =>
              updateField("email", event.target.value)
            }
          />

          {errors.email && (
            <p className="mt-2 text-xs text-red-300">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-200">
            {t.projectForm.contact.whatsapp}
          </label>

          <input
            type="text"
            className={inputClass}
            value={formData.whatsapp}
            onChange={(event) =>
              updateField("whatsapp", event.target.value)
            }
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-slate-200">
            {t.projectForm.contact.business}
          </label>

          <input
            type="text"
            className={inputClass}
            value={formData.business}
            onChange={(event) =>
              updateField("business", event.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

export default ContactStep;