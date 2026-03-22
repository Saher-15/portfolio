const skills = {
  Frontend: [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Responsive Design",
    "Vite",
    "State Management",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "FastAPI",
    "Python",
    "REST APIs",
    "JWT Authentication",
    "Email Verification Flow",
    "Password Reset Flow",
  ],
  "AI & Automation": [
    "OpenAI API",
    "Claude AI (Anthropic)",
    "RAG Systems",
    "ChromaDB",
    "Prompt Engineering",
    "n8n Workflows",
    "IMAP Automation",
    "Google Sheets API",
  ],
  "Cloud & DevOps": [
    "AWS EC2",
    "Docker",
    "Docker Compose",
    "Netlify",
    "Render",
    "Linux/Unix",
    "SSH",
    "Git",
  ],
  Databases: [
    "MongoDB",
    "Mongoose",
    "MySQL",
    "SQL",
    "Schema Design",
  ],
  Programming: [
    "JavaScript",
    "Python",
    "Java",
    "C",
    "C#",
    "JavaFX",
  ],
};


export function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="sectionTitle">Skills</h2>
        <p className="sectionSub">
          A focused stack for building modern, scalable web apps.
        </p>

        <div className="grid2">
          {Object.entries(skills).map(([group, items]) => (
            <div className="card skillGroup" key={group}>
              <h3>{group}</h3>
              <div className="skillList">
                {items.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}