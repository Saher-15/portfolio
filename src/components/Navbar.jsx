import { useState } from "react";
import { FaBars } from "react-icons/fa";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const onClickLink = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container navInner">
        <a className="brand" href="#home" onClick={onClickLink}>
          <span className="brandDot" />
          <span>Saher Portfolio</span>
        </a>

        <nav className={`navLinks ${open ? "open" : ""}`}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={onClickLink}>
              {l.label}
            </a>
          ))}
        </nav>

        <button className="navBtn" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          <FaBars />
        </button>
      </div>
    </header>
  );
}