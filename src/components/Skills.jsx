export default function Skills({ skills, certs }) {
  return (
    <section className="section">
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
      <h3 className="certs-heading">Certifications</h3>
      <div className="certs">
        {certs.map((cert, i) => (
          <div key={i} className="cert">
            <p className="cert-name">{cert.name}</p>
            <p className="cert-meta">{cert.issuer} · {cert.year}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
