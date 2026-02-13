export function CVModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="cvOverlay" onClick={onClose}>
      <div className="cvModal" onClick={(e) => e.stopPropagation()}>
        <button className="cvClose" onClick={onClose}>
          ✕
        </button>

        <iframe
          src="/Saher_Saadi_CV.pdf"
          title="Saher Saadi CV"
          className="cvFrame"
        />
      </div>
    </div>
  );
}