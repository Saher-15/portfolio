import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { CVModal } from "./CVModal";

export function Contact() {
  const [openCV, setOpenCV] = useState(false);

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionSub">
          Want to work together? Reach out via email / LinkedIn.
        </p>

        <div className="contactGrid">
          <div className="card">
            <div style={{ display: "grid", gap: 10 }}>
              <a className="btn" href="mailto:saher.saadi.99@gmail.com">
                <FaEnvelope /> saher.saadi.99@gmail.com
              </a>

              <a
                className="btn"
                href="https://www.linkedin.com/in/saher-saadi-a637b11b5/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin /> LinkedIn
              </a>

              <a
                className="btn"
                href="https://github.com/saher-15"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub /> GitHub
              </a>

              {/* ✅ Open CV modal */}
              <button
                className="btn btnPrimary"
                onClick={() => setOpenCV(true)}
              >
                📄 View CV
              </button>
            </div>
          </div>
        </div>

        {/* CV POPUP */}
        <CVModal open={openCV} onClose={() => setOpenCV(false)} />
      </div>
    </section>
  );
}