import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
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

              <a
                className="btn btnPrimary"
                href="public/Saher_Saadi_CV.pdf"
                target="_blank"
                rel="noreferrer"
              >
                📄 View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}