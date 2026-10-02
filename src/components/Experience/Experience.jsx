import Section from '../Section/Section'
import AnimateReveal from '../AnimateReveal/AnimateReveal'
import './Experience.css'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline-list">

        {/* NimbleBiz AI */}
        <AnimateReveal
          as="article"
          className="experience-item card animate-item"
        >
          <h3>AI Engineer Intern</h3>

          <p className="exp-meta">
            NimbleBiz AI <span>/ March – August 2026</span>
          </p>

          <ul>
            <li>
              Developed Generative AI applications, including Voice AI agents
              and Noah AI, an AI-powered deployment automation platform.
            </li>
            <li>
              Built and integrated LLM-powered agents using prompt engineering,
              agent workflows, APIs, webhooks, and backend services.
            </li>
            <li>
              Contributed to AI-driven application analysis, deployment
              configuration, and automated deployment workflows.
            </li>
            <li>
              Designed Noah AI for simplifying application deployment through
              AI-powered automation.
              {' '}
              <a
                href="https://noahops.com"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-link"
              >
                View Live Product ↗
              </a>
            </li>
          </ul>

          <div className="exp-tags">
            {[
              'Generative AI',
              'Python',
              'LLMs',
              'AI Agents',
              'APIs',
              'Automation',
            ].map((tag) => (
              <span key={tag} className="tag exp-tag">
                {tag}
              </span>
            ))}
          </div>
        </AnimateReveal>

        {/* 4Sight AI */}
        <AnimateReveal
          as="article"
          className="experience-item card animate-item"
        >
          <h3>AI Intern</h3>

          <p className="exp-meta">
            4Sight AI <span>/ May – July 2025</span>
          </p>

          <ul>
            <li>
              Built Generative AI and agentic systems for enterprise use.
            </li>
            <li>
              Optimized workflows with intelligent automation and prompt
              engineering.
            </li>
            <li>
              Worked on AI-based document processing and information extraction.
            </li>
          </ul>

          <div className="exp-tags">
            {['GenAI', 'Python', 'LLMs', 'Agents'].map((tag) => (
              <span key={tag} className="tag exp-tag">
                {tag}
              </span>
            ))}
          </div>
        </AnimateReveal>

      </div>
    </Section>
  )
}
