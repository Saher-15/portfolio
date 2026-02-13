import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionSub">
          Want to work together? Send me a message or reach out via email / LinkedIn.
        </p>

        <div className="contactGrid">
          <div className="card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent (demo). Connect it to EmailJS / backend later.");
              }}
            >
              <div style={{ display: "grid", gap: 10 }}>
                <input className="input" placeholder="Your name" required />
                <input className="input" placeholder="Your email" type="email" required />
                <textarea className="textarea" placeholder="Your message" required />
                <button className="btn btnPrimary" type="submit">
                  <FaEnvelope /> Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="card">
            <div style={{ display: "grid", gap: 10 }}>
              <a className="btn" href="mailto:saher.saadi.99@gmail.com">
                <FaEnvelope /> saher.saadi.99@gmail.com
              </a>
              <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <FaLinkedin /> LinkedIn
              </a>
              <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">
                <FaGithub /> GitHub
              </a>
              <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", lineHeight: 1.7 }}>
                Tip: add your real links + a downloadable CV PDF button.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}   