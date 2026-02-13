import { useState } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://portfolio-tepn.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) throw new Error("Request failed");

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="sectionTitle">Contact</h2>
        <p className="sectionSub">
          Want to work together? Send me a message or reach out via email / LinkedIn.
        </p>

        <div className="contactGrid">
          <div className="card">
            <form onSubmit={onSubmit}>
              <div style={{ display: "grid", gap: 10 }}>
                <input
                  className="input"
                  name="name"
                  placeholder="Your name"
                  required
                  value={form.name}
                  onChange={onChange}
                />
                <input
                  className="input"
                  name="email"
                  placeholder="Your email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                />
                <textarea
                  className="textarea"
                  name="message"
                  placeholder="Your message"
                  required
                  value={form.message}
                  onChange={onChange}
                />

                <button className="btn btnPrimary" type="submit" disabled={status === "sending"}>
                  <FaEnvelope /> {status === "sending" ? "Sending..." : "Send Message"}
                </button>

                {status === "success" && (
                  <div style={{ color: "rgba(255,255,255,0.85)" }}>
                    ✅ Message sent! I’ll get back to you soon.
                  </div>
                )}

                {status === "error" && (
                  <div style={{ color: "rgba(255,255,255,0.85)" }}>
                    ❌ Failed to send. Please try again, or email me directly.
                  </div>
                )}
              </div>
            </form>
          </div>

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
              <a className="btn" href="https://github.com/saher-15" target="_blank" rel="noreferrer">
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