import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Section.css'

export default function Section({ id, title, titleHighlight, subtitle, children, className = '' }) {
  const headingRef = useScrollReveal()

  return (
    <section id={id} className={className}>
      <div className="wrap">
        <h2 className="section-heading animate-heading" ref={headingRef}>
          {titleHighlight != null ? (
            <>
              {title} <span>{titleHighlight}</span>
            </>
          ) : (
            <span>{title}</span>
          )}
        </h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}
