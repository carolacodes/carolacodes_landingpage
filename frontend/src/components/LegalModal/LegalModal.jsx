function LegalModal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      {/* Overlay */}
      <button
        aria-label="Cerrar modal"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl max-h-[80vh] overflow-hidden rounded-3xl border border-white/10 bg-[#00171F] shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
          <h2 className="text-xl font-bold text-white">{title}</h2>

          <button
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          >
            <span className="material-symbols-outlined text-[20px]">
              close
            </span>
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[65vh] overflow-y-auto px-6 py-6 text-sm leading-relaxed text-slate-300">
          {children}
        </div>
      </div>
    </div>
  );
}

export default LegalModal;