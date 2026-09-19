function IndustryCard({ icon, title, description, consultLabel }) {
  return (
    <article className="saas-card group flex flex-col rounded-2xl border border-slate-200 bg-white p-8">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-[#007EA7]">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#00171F]">{title}</h3>

      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        {description}
      </p>

      <a
        href="#contacto"
        className="mt-6 text-sm font-semibold text-[#00A8E8] opacity-0 transition group-hover:opacity-100"
      >
        {consultLabel} →
      </a>
    </article>
  );
}

export default IndustryCard;