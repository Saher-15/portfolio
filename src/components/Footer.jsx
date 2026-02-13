export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <span>© {year} Saher. All rights reserved.</span>
        <span style={{ color: "rgba(255,255,255,0.6)" }}>
          Built with React • Responsive • Clean UI
        </span>
      </div>
    </footer>
  );
}