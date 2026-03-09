const skills = {
  Frontend: [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
    "API Consumption",
    "State Management",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MVC Architecture",
    "Microservices",
    "JWT Authentication",
    "Secure Cookies (HTTP‑Only)",
    "Email Verification Flow",
    "Password Reset Flow",
  ],
  Databases: [
    "MongoDB",
    "Mongoose",
    "SQL",
    "Schema Design",
  ],
  Programming: [
    "Java",
    "Python",
    "C",
    "C#",
    "Assembly",
    "JavaFX",
  ],
  AI_ModernTech: [
    "AI Fundamentals",
    "OpenAI API",
    "Prompt Engineering",
    "API Integrations",
    "Automation Tools",
  ],
  Tools: [
    "Git",
    "Linux/Unix",
    "Postman",
    "Mailjet API",
    "PayPal API",
    "Docker (Basic)",
    "Netlify Deployment",
    "Render Deployment",
  ],
  Concepts: [
    "OOP",
    "Data Structures",
    "Algorithms",
    "Client-Server Architecture",
    "Networking",
    "Authentication & Authorization",
    "Security Best Practices",
    "JSON",
    "XML",
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