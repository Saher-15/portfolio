export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="sectionTitle">About</h2>

        <p className="sectionSub">
          Full Stack Developer with a Master’s degree in Software Engineering (GPA 94),
          experienced in building modern, scalable web applications using React, Node.js,
          Express, and MongoDB. I enjoy turning real-world ideas into clean, reliable
          features — from authentication and secure APIs to AI-powered tools, email
          workflows, and production deployments.
        </p>

        <div className="grid2">
          
          <div className="card">
            <h3 style={{ marginTop: 0 }}>What I’m good at</h3>
            <ul style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
              <li>Building responsive, modern React interfaces</li>
              <li>Designing and structuring REST APIs with Node.js & Express</li>
              <li>Authentication flows (JWT, secure cookies, email verification)</li>
              <li>Integrating AI features using the OpenAI API</li>
              <li>Working with MongoDB, schema design, and backend logic</li>
              <li>Deploying full-stack apps on Netlify & Render</li>
              <li>Explaining technical concepts clearly (Lecturer experience)</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What I’m looking for</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
              I’m looking for a Junior Full Stack Developer role where I can contribute
              to both frontend and backend development, build real production features,
              and continue growing within a strong engineering team. I’m especially
              interested in roles involving modern React applications, scalable Node.js
              services, and opportunities to work with AI or automation tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
