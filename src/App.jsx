import { useState } from "react"
import { resume } from "./data/resume"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import "./App.css"

export default function App() {
  const [active, setActive] = useState("experience")

  return (
    <div className="app">
      <Hero data={resume} active={active} setActive={setActive} />
      <main className="content">
        {active === "experience" && <Experience jobs={resume.experience} />}
        {active === "skills" && <Skills skills={resume.skills} certs={resume.certifications} />}
      </main>
    </div>
  )
}
