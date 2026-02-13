const skills = {
  Frontend: [
    "React",
    "JavaScript (ES6+)",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Responsive Design",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MVC Architecture",
    "Microservices",
    "JWT Authentication",
  ],
  Databases: ["MongoDB", "SQL"],
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
    "API Integrations",
    "Automation Tools",
  ],
  Tools: [
    "Git",
    "Linux/Unix",
    "Postman",
    "PayPal API",
    "Docker (Basic)",
  ],
  Concepts: [
    "OOP",
    "Data Structures",
    "Algorithms",
    "Client-Server Architecture",
    "Networking",
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