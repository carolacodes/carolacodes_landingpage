import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="min-h-screen bg-[#00171F] text-white flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <p className="text-[#1DF2F8] font-semibold text-sm mb-4">
          404
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Esta página no existe.
        </h1>

        <p className="text-slate-400 text-base md:text-lg mb-8">
          Parece que el enlace que buscás no existe o fue movido.
        </p>

        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-[#1DF2F8] px-6 py-3 text-sm font-semibold text-[#00171F] transition-all hover:-translate-y-0.5 hover:shadow-[0_0_32px_0px_rgba(29,242,248,0.45)]"
        >
          Volver a CarolaCodes
        </Link>
      </div>
    </main>
  );
}

export default NotFound;