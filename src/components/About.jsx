export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="sectionTitle">About</h2>
        <p className="sectionSub">
          Junior Full Stack Developer with a Master’s degree in Software Engineering (GPA 94),
          experienced in building responsive and scalable web applications using React,
          Node.js, and modern web technologies. I focus on creating clean user interfaces,
          well-structured backend systems, and real-world features such as payments,
          live events, and admin dashboards.
        </p>

        <div className="grid2">
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What I’m good at</h3>
            <ul style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
              <li>Building responsive React interfaces with clean UI</li>
              <li>Designing REST APIs using Node.js & Express</li>
              <li>Full-stack architecture and component organization</li>
              <li>Integrating real-world features (payments, live events, dashboards)</li>
              <li>Mentoring and explaining technical concepts (Lecturer experience)</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What I’m looking for</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
              I’m looking for a Junior Full Stack Developer role where I can work across
              both frontend and backend, building modern React applications and scalable
              Node.js services while growing within a strong engineering team.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}