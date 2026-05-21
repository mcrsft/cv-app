import { useEffect, useState } from "react"

const lines = [
  "$ ssh root@aydendelk.com",
  "Connecting to aydendelk.com...",
  "Host key verified.",
  "Authenticating...",
  "Access granted.",
]

export default function LoadingScreen({ onComplete }) {
  const [displayedLines, setDisplayedLines] = useState([])
  const [currentLine, setCurrentLine] = useState("")
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [done, setDone] = useState(false)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setTimeout(() => setFading(true), 800)
      setTimeout(() => {
        setDone(true)
        onComplete()
      }, 1600)
      return
    }

    const line = lines[lineIndex]

    if (charIndex < line.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + line[charIndex])
        setCharIndex(prev => prev + 1)
      }, 40)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => [...prev, line])
        setCurrentLine("")
        setCharIndex(0)
        setLineIndex(prev => prev + 1)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [lineIndex, charIndex])

  if (done) return null

  return (
    <div className={`loader ${fading ? "loader-fade" : ""}`}>
      <div className="loader-terminal">
        {displayedLines.map((line, i) => (
          <p key={i} className="loader-line done">{line}</p>
        ))}
        {lineIndex < lines.length && (
          <p className="loader-line">
            {currentLine}
            <span className="cursor">▋</span>
          </p>
        )}
      </div>
    </div>
  )
}
