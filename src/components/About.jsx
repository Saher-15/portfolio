export function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="sectionTitle">About</h2>

        <p className="sectionSub">
          Full-Stack Developer with a B.Sc. (2024) and M.Sc. in Software Engineering expected June 2026 (GPA 94).
          Strong CS fundamentals including Data Structures (92) and Algorithms. I build production-ready web apps,
          RAG systems, automation pipelines, and systems-level software — from React frontends and Node.js/FastAPI
          backends to AI integrations with Claude & OpenAI, TCP servers in C, and deployments on AWS with Docker.
        </p>

        <div className="grid2">

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What I’m good at</h3>
            <ul style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
              <li>Building responsive React interfaces with clean UX</li>
              <li>Designing REST APIs with Node.js, Express & FastAPI</li>
              <li>Authentication flows — JWT, secure cookies, email verification</li>
              <li>Building RAG systems with Claude AI & vector databases</li>
              <li>Automating workflows with n8n, Docker, and AWS EC2</li>
              <li>Deploying full-stack apps to Netlify, Render & AWS</li>
              <li>Systems programming in C — TCP sockets, threads, mutex</li>
              <li>Explaining technical concepts clearly (Lecturer experience)</li>
            </ul>
          </div>

          <div className="card">
            <h3 style={{ marginTop: 0 }}>What I’m looking for</h3>
            <p style={{ margin: 0, color: "rgba(255,255,255,0.78)", lineHeight: 1.8 }}>
              I’m looking for a Software Engineer role where I can contribute to both frontend
              and backend development, ship real production features, and grow within a strong
              engineering team. I’m especially interested in roles involving modern React apps,
              scalable backend services, AI integrations, or automation tools.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
