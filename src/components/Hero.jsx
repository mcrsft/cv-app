export default function Hero({ data, active, setActive }) {
  const navItems = ["experience", "skills"]

  return (
    <header className="hero">
      <div className="hero-text">
        <h1>{data.name}</h1>
        <p className="title">{data.title}</p>
        <p className="location">{data.location}</p>
        <div className="links">
          <a href={`mailto:${data.email}`}>{data.email}</a>
          <a href={data.github} target="_blank">GitHub</a>
          <a href={data.linkedin} target="_blank">LinkedIn</a>
        </div>
      </div>
      <nav className="nav">
        {navItems.map(item => (
          <button
            key={item}
            className={active === item ? "nav-btn active" : "nav-btn"}
            onClick={() => setActive(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </nav>
    </header>
  )
}
