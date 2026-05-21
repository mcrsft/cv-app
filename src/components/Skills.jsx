export default function Skills({ skills, certs }) {
  const categories = {
    Systems: skills.systems,
    Networking: skills.networking,
    Infrastructure: skills.infrastructure,
    "Cloud & RMM": skills.cloud,
    Scripting: skills.scripting,
    Tools: skills.tools,
  }

  return (
    <section className="section">
      {Object.entries(categories).map(([category, items]) => (
        <div key={category} className="skill-category">
          <h4 className="skill-category-label">{category}</h4>
          <div className="skills-grid">
            {items.map((skill, i) => (
              <span key={i} className="skill-tag">{skill}</span>
            ))}
          </div>
        </div>
      ))}

      <h3 className="certs-heading">Certifications & Clearances</h3>
      <div className="certs">
        {certs.map((cert, i) => (
          <div key={i} className="cert">
            <p className="cert-name">{cert.name}</p>
            {cert.issuer && (
              <p className="cert-meta">{cert.issuer}{cert.year ? ` · ${cert.year}` : ""}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
