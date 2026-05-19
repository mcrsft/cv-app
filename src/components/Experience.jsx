export default function Experience({ jobs }) {
  return (
    <section className="section">
      {jobs.map((job, index) => (
        <div key={index} className="job">
          <div className="job-header">
            <div>
              <h3 className="job-title">{job.title}</h3>
              <p className="job-company">{job.company}</p>
            </div>
            <span className="job-dates">{job.start} — {job.end}</span>
          </div>
          <ul className="job-bullets">
            {job.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
