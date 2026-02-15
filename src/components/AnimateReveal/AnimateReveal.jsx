import { useScrollReveal } from '../../hooks/useScrollReveal'

export default function AnimateReveal({ children, delay = 0, className = 'animate-card', as: Tag = 'div', ...props }) {
  const ref = useScrollReveal({ delay })
  return (
    <Tag className={`${className}`.trim()} ref={ref} {...props}>
      {children}
    </Tag>
  )
}
