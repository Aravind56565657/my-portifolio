import Section from '../Section/Section'
import AnimateReveal from '../AnimateReveal/AnimateReveal'
import { projects } from '../../data/content'
import './Projects.css'

function ProjectCard({ project, index }) {
  return (
    <AnimateReveal as="article" delay={index * 80} className="project-card card animate-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag project-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live site</a>
        )}
        {project.sourceUrl && (
          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
            {project.sourceUrl.startsWith('https://github.com') ? 'GitHub' : 'Source'}
          </a>
        )}
      </div>
    </AnimateReveal>
  )
}

export default function Projects() {
  return (
    <Section id="projects" title="Selected " titleHighlight="projects" subtitle="Selected intelligent systems and digital products.">
      <div className="projects-grid grid-responsive">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
