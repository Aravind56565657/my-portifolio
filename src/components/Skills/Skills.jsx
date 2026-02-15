import Section from '../Section/Section'
import AnimateReveal from '../AnimateReveal/AnimateReveal'
import { skillGroups } from '../../data/content'
import './Skills.css'

function SkillCategory({ group, index }) {
  return (
    <AnimateReveal delay={index * 100} className="skill-category card animate-block">
      <h3 className="skill-category-title">{group.title}</h3>
      <div className="skill-tags">
        {group.skills.map((skill) => (
          <span key={skill} className="tag skill-tag">{skill}</span>
        ))}
      </div>
    </AnimateReveal>
  )
}

export default function Skills() {
  return (
    <Section id="skills" title="Technical " titleHighlight="Ecosystem">
      <div className="skills-grid grid-responsive grid-3">
        {skillGroups.map((group, i) => (
          <SkillCategory key={group.title} group={group} index={i} />
        ))}
      </div>
    </Section>
  )
}
