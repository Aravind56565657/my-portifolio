import Section from '../Section/Section'
import AnimateReveal from '../AnimateReveal/AnimateReveal'
import { about } from '../../data/content'
import './About.css'

export default function About() {
  const { mission, education, focus, drive, beyond } = about

  return (
    <Section
      id="about"
      title="Beyond the "
      titleHighlight="Code"
      subtitle="Who I am, what drives me, and what I do when the laptop closes."
    >
      <div className="about-grid">
        <AnimateReveal className="about-mission" delay={0}>
          <blockquote className="about-quote">
            {mission}
          </blockquote>
        </AnimateReveal>

        <AnimateReveal className="about-edu-card" delay={60}>
          <div className="about-edu">
            <span className="about-edu-badge">Education</span>
            <h3 className="about-edu-degree">{education.degree}</h3>
            <p className="about-edu-college">{education.college}</p>
            <span className="about-edu-cgpa">
              <strong>{education.cgpa}</strong> CGPA
            </span>
          </div>
        </AnimateReveal>

        <AnimateReveal className="about-focus-wrap" delay={120}>
          <span className="about-label">Currently focused on</span>
          <ul className="about-focus-list">
            {focus.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </AnimateReveal>

        <div className="about-drive">
          {drive.map((item, i) => (
            <AnimateReveal key={i} className="about-drive-card" delay={80 + i * 60}>
              <span className="about-drive-icon" aria-hidden>{item.icon}</span>
              <h4 className="about-drive-title">{item.title}</h4>
              <p className="about-drive-text">{item.text}</p>
            </AnimateReveal>
          ))}
        </div>

        <AnimateReveal className="about-beyond" delay={200}>
          <h4 className="about-beyond-headline">{beyond.headline}</h4>
          <ul className="about-beyond-list">
            {beyond.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </AnimateReveal>
      </div>
    </Section>
  )
}
