import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "RAG System",
    desc: "Production-ready document Q&A platform. Upload files and ask questions — Claude streams answers with source citations using semantic vector search.",
    stack: ["Python", "FastAPI", "ChromaDB", "Claude AI", "SSE Streaming", "Docker"],
    live: "https://rag-system-lpro.onrender.com/",
    repo: "https://github.com/Saher-15/RAG-System",
  },
  {
    title: "AI Travel Planner",
    desc: "AI-powered travel planner with full auth flow, email verification, interactive maps, and itinerary generation using OpenAI.",
    stack: ["React", "Node.js", "Express", "MongoDB", "OpenAI API", "MapTiler", "Mailjet", "JWT"],
    live: "https://travelplanner-ai.netlify.app",
    repo: "https://github.com/Saher-15/ai-travel-planner",
  },
  {
    title: "Email Automation",
    desc: "Automated pipeline that captures incoming Gmail emails and logs them to Google Sheets in real-time. Deployed 24/7 on AWS EC2.",
    stack: ["n8n", "Docker", "AWS EC2", "Gmail IMAP", "Google Sheets API"],
    live: null,
    repo: "https://github.com/Saher-15/email-to-sheets-automation",
  },
  {
    title: "Nazareth Holy Cross Website",
    desc: "Responsive church website with live events calendar, donation flow, and PayPal integration.",
    stack: ["React", "Node.js", "PayPal API", "Responsive UI"],
    live: "https://nazarethholycross.com",
    repo: "https://github.com/saher-15",
  },
  {
    title: "Shop & Cart System",
    desc: "E-commerce UI with product pages, cart state management, checkout UX, and responsive styling.",
    stack: ["React", "State Management", "CSS", "UX"],
    live: "https://siwarafashion.netlify.app",
    repo: "https://github.com/saher-15",
  },
  {
    title: "TCP Chat Server",
    desc: "Multi-client real-time chat server in C using TCP sockets and POSIX threads. Supports multiple simultaneous clients with broadcast messaging and thread-safe state management.",
    stack: ["C", "TCP Sockets", "POSIX Threads", "Mutex", "Linux"],
    live: null,
    repo: "https://github.com/Saher-15/tcp-chat-server",
  },
  {
    title: "Bank Management System",
    desc: "Desktop banking app with full GUI for managing accounts, loans, credits, mortgages, and transfers.",
    stack: ["Java", "JavaFX", "MySQL", "JDBC"],
    live: null,
    repo: "https://github.com/Saher-15/Bank-Management",
  },
];

export function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="sectionTitle">Projects</h2>


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
                {p.live && (
                  <a className="miniBtn" href={p.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
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