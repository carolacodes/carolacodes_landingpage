function ServiceCard({ icon, title, description }) {
  return (
    <article className="saas-card flex flex-col gap-5 rounded-2xl border border-slate-200 bg-white p-7">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-50 text-2xl text-[#007EA7]">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-bold text-[#00171F]">{title}</h3>

        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {description}
        </p>
      </div>

      <div className="mt-auto h-20 rounded-xl border border-slate-100 bg-slate-50" />
    </article>
  );
}

export default ServiceCard;