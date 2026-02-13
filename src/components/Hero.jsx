import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container heroGrid">
        <div className="card">
          <h1 className="heroTitle">
            Hi, I’m <span>Saher</span> — <br />
            Junior Full Stack Developer
          </h1>

          <p className="heroText">
            I build responsive web apps using React, Node.js, and REST APIs.
            Master’s degree in Software Engineering (GPA 94). I enjoy clean UI, real-world
            features, and learning fast.
          </p>

          <div className="actions">
            <a className="btn btnPrimary" href="#projects">
              <FaArrowDown /> View Projects
            </a>
            <a className="btn" href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="btn" href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
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
            <span className="pill">MongoDB / SQL</span>
            <span className="pill">Responsive UI</span>
            <span className="pill">AI Integrations</span>
          </div>
        </div>

        <div className="card">
          <div className="kpiGrid">
            <div className="kpi">
              <strong>Focus</strong>
              <span>Modern web apps, clean UX, production-ready code</span>
            </div>
            <div className="kpi">
              <strong>Strengths</strong>
              <span>React UI, REST APIs, component organization, responsiveness</span>
            </div>
            <div className="kpi">
              <strong>Based in</strong>
              <span>Israel (open to remote / relocation)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}