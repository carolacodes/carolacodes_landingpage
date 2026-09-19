import { useLanguage } from "../../hooks/useLanguage";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="w-full bg-[#00171F] relative overflow-hidden py-20 lg:py-28">
      {/* Animated Aurora */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[720px] h-[520px] bg-[#1DF2F8]/15 rounded-full blur-[140px] pointer-events-none animate-aurora-1" />

      <div className="absolute top-1/3 right-1/4 w-[640px] h-[640px] bg-[#00A8E8]/15 rounded-full blur-[160px] pointer-events-none animate-aurora-2" />

      {/* Grid texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 lg:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md mb-6 hover:border-[#1DF2F8]/40 transition-colors">
          <span className="material-symbols-outlined text-[#1DF2F8] text-[17px]">
            bolt
          </span>

          <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">
            {t.hero.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-[850px] mx-auto">
          {t.hero.titleStart}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1DF2F8] via-sky-300 to-white drop-shadow-[0_0_24px_rgba(29,242,248,0.35)]">
            {t.hero.titleHighlight}
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-[700px] mx-auto">
          {t.hero.description}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8 w-full sm:w-auto">
          <a
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#1DF2F8] text-[#00171F] font-bold text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 hover:shadow-[0_0_36px_0px_rgba(29,242,248,0.75)] hover:-translate-y-0.5 transition-all group"
            href="#contacto"
          >
            <span>{t.hero.primaryCta}</span>

            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </a>

          <a
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/[0.06] border border-white/20 text-white font-medium text-sm hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 transition-all"
            href="#contacto"
          >
            <span className="material-symbols-outlined text-[18px] text-[#1DF2F8]">
              calendar_today
            </span>

            <span>{t.hero.secondaryCta}</span>
          </a>
        </div>

        {/* Metrics */}
        <div className="mt-10 pt-8 flex flex-wrap items-center justify-center gap-8 md:gap-14 border-t border-white/[0.08] w-full max-w-xl text-center">
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              100%
            </span>

            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {t.hero.metricCustom}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-[#1DF2F8] tracking-tight">
              &lt; 15 días
            </span>

            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {t.hero.metricPrototype}
            </span>
          </div>

          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              0 fricción
            </span>

            <span className="text-xs sm:text-sm text-slate-400 mt-0.5">
              {t.hero.metricSupport}
            </span>
          </div>
        </div>

        {/* Video */}
        <div className="mt-14 w-full max-w-[960px] mx-auto">
          <div className="relative w-full rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-b from-white/15 via-white/5 to-transparent shadow-2xl backdrop-blur-md">
            <div className="relative w-full rounded-2xl md:rounded-3xl bg-[#00202B]/95 p-3 md:p-4 border border-white/10 overflow-hidden group">
              <div className="relative w-full aspect-video rounded-xl md:rounded-2xl overflow-hidden flex flex-col justify-between p-5 md:p-8 border border-white/10 bg-[#00171F]">
                {/* Temporal Stitch placeholder */}
                <img
                  alt="Carola software engineer studio"
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfVoyUz4nQ-x-8pVp8B5jCIs6HjQjZVO9lqZX9QrUjfPxq_m5FzkPEJYQera8Q8Ey4e-qbMJuJNstn_giPSawEgGCXjft4ZNDOMZIPOJG5WVPKL_W_B08xjxB118t9pd_p1JUv1dlo34yIWs4kyaj7yXScbq1SyLGAwXj2qNhvo46gn8RIPfL9Ap7wjilfDgg90iyhEOwbBv50v3nWJ-7rzEUcxQ-KZfmvvxvGLRDr5vKoKA4NVb_o"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#00171F]/95 via-[#00171F]/40 to-transparent" />

                {/* Top badges */}
                <div className="relative z-10 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00171F]/85 border border-white/15 backdrop-blur-md text-white text-[11px] md:text-xs font-semibold tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-[#1DF2F8] animate-pulse" />

                    {t.hero.videoBadge}
                  </span>

                  <span className="px-3 py-1 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm text-slate-200 text-[11px] md:text-xs font-medium">
                    2:14 MIN
                  </span>
                </div>

                {/* Play */}
                <div className="relative z-10 flex flex-col items-center justify-center my-auto">
                  <button
                    aria-label={t.hero.playLabel}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/95 text-[#00171F] flex items-center justify-center shadow-[0_0_30px_rgba(29,242,248,0.7)] group-hover:scale-110 group-hover:bg-[#1DF2F8] transition-all cursor-pointer"
                    type="button"
                  >
                    <span
                      className="material-symbols-outlined text-[36px] md:text-[42px] ml-1"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </button>
                </div>

                {/* Bottom metadata */}
                <div className="relative z-10 flex items-end justify-between text-white text-left">
                  <div>
                    <p className="text-base md:text-xl font-bold leading-tight">
                      {t.hero.videoTitle}
                    </p>

                    <p className="text-xs md:text-sm text-slate-300 mt-1">
                      {t.hero.videoDescription}
                    </p>
                  </div>

                  <div className="hidden sm:flex items-center gap-1.5 text-[#1DF2F8] text-xs md:text-sm font-semibold hover:underline cursor-pointer">
                    <span>{t.hero.watchIntro}</span>

                    <span className="material-symbols-outlined text-[16px]">
                      open_in_new
                    </span>
                  </div>
                </div>
              </div>

              {/* Video footer */}
              <div className="flex flex-col sm:flex-row items-center justify-between pt-3 px-3 gap-2 text-slate-300 text-xs">
                <span className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[#1DF2F8] text-[16px]">
                    verified
                  </span>

                  {t.hero.directWork}
                </span>

                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 bg-white/5 px-2.5 py-0.5 rounded-full border border-white/5">
                  FULL-STACK · CLOUD · AI
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;