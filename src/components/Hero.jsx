import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";
import myPhoto from "../assets/Saher.jpeg";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container heroGrid">
        
        {/* LEFT CARD */}
        <div className="card">
          <h1 className="heroTitle">
            Hi, I’m <span>Saher</span> — <br />
            Junior Full Stack Developer
          </h1>

          <p className="heroText">
            I build modern, responsive, and production‑ready web applications using 
            React, Node.js, Express, and MongoDB. I enjoy turning real‑world ideas 
            into clean, reliable features — from authentication and APIs to AI‑powered 
            tools and polished UI. I hold a Master’s degree in Software Engineering 
            (GPA 94).
          </p>

          <div className="actions">
            <a className="btn btnPrimary" href="#projects">
              <FaArrowDown /> View Projects
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
              className="btn"
              href="https://www.linkedin.com/in/saher-saadi-a637b11b5/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>

            <a className="btn" href="mailto:saher.saadi.99@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>

          <div className="pills">
            <span className="pill">React</span>
            <span className="pill">Node.js</span>
            <span className="pill">Express</span>
            <span className="pill">MongoDB</span>
            <span className="pill">REST APIs</span>
            <span className="pill">Authentication</span>
            <span className="pill">AI Integrations</span>
            <span className="pill">Responsive UI</span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="card">
          <div className="heroPhotoWrap">
            <img className="heroPhoto" src={myPhoto} alt="Saher Saadi" />
          </div>

          <div className="kpiGrid">
            <div className="kpi">
              <strong>Focus</strong>
              <span>Full‑stack apps, clean UX, scalable backend systems</span>
            </div>

            <div className="kpi">
              <strong>Strengths</strong>
              <span>
                React UI, API design, authentication, database modeling, AI features
              </span>
            </div>

            <div className="kpi">
              <strong>Based in</strong>
              <span>Israel (open to remote & relocation)</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
