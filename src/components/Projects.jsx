import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Nazareth Holy Cross Website",
    desc: "Responsive website with live events, donation flow, and PayPal integration.",
    stack: ["React", "Node.js", "PayPal API", "Responsive UI"],
    live: "https://nazarethholycross.com",
    repo: "https://github.com/",
  },
  {
    title: "Shop & Cart System",
    desc: "Product pages, cart behavior, checkout UX improvements, and UI styling.",
    stack: ["React", "State Management", "CSS", "UX"],
    live: "https://example.com",
    repo: "https://github.com/",
  },
  {
    title: "Portfolio Website (This)",
    desc: "One-page personal portfolio with responsive layout and easy editing.",
    stack: ["React", "CSS", "Responsive"],
    live: "#home",
    repo: "https://github.com/",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>
        <p className="sectionSub">
          Replace the demo links with your real GitHub + live URLs. Add screenshots later if you want.
        </p>

        <div className="grid3">
          {projects.map((p) => (
            <div className="card projectCard" key={p.title}>
              <div className="projectTop">
                <div>
                  <h3 className="projectTitle">{p.title}</h3>
                  <p className="projectDesc">{p.desc}</p>
                </div>
              </div>

              <div className="skillList">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>

              <div className="projectLinks">
                <a className="miniBtn" href={p.live} target="_blank" rel="noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a className="miniBtn" href={p.repo} target="_blank" rel="noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}