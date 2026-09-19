import { useLanguage } from "../../hooks/useLanguage";

function HeroVideo() {
  const { t } = useLanguage();

  return (
    <div className="mt-14 w-full max-w-[960px]">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-[#00202B]">
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-3xl text-[#00171F] shadow-[0_0_30px_rgba(29,242,248,.55)] transition hover:scale-110 hover:bg-[#1DF2F8]">
              ▶
            </button>
          </div>

          <div className="absolute bottom-6 left-6 text-left">
            <p className="text-lg font-bold text-white">
              {t.hero.videoTitle}
            </p>

            <p className="text-sm text-slate-300">
              {t.hero.videoDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVideo;