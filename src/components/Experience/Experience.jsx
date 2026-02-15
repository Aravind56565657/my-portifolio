import Section from '../Section/Section'
import AnimateReveal from '../AnimateReveal/AnimateReveal'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline-list">
        <AnimateReveal as="article" className="experience-item card animate-item">
          <h3>AI Intern</h3>
          <p className="exp-meta">4sight AI <span>/ May – July 2025</span></p>
          <ul>
            <li>Built Generative AI &amp; agentic systems for enterprise use.</li>
            <li>Optimized workflows with intelligent automation &amp; prompt engineering.</li>
            <li>Deployed production-grade AI models in offline environments.</li>
          </ul>
          <div className="exp-tags">
            {['GenAI', 'Python', 'LLMs', 'Agents'].map((tag) => (
              <span key={tag} className="tag exp-tag">{tag}</span>
            ))}
          </div>
        </AnimateReveal>
      </div>
    </Section>
  )
}
