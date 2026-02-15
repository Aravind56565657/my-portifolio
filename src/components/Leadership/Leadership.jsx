import Section from '../Section/Section'
import AnimateReveal from '../AnimateReveal/AnimateReveal'
import { positions } from '../../data/content'
import './Leadership.css'

function PositionCard({ position, index }) {
  return (
    <AnimateReveal as="article" delay={index * 80} className="position-card card animate-block">
      <h3>{position.title}</h3>
      <p className="position-org">{position.org}</p>
      <p className="position-desc">{position.description}</p>
    </AnimateReveal>
  )
}

export default function Leadership() {
  return (
    <Section id="leadership" title="Positions of " titleHighlight="Responsibility">
      <div className="positions-grid grid-responsive">
        {positions.map((pos, i) => (
          <PositionCard key={pos.title} position={pos} index={i} />
        ))}
      </div>
    </Section>
  )
}
