import { useScrollReveal } from '../../hooks/useScrollReveal'
import './Footer.css'

export default function Footer() {
  const ref = useScrollReveal()
  return (
    <footer id="footer" className="footer-section animate-footer" ref={ref}>
      <div className="wrap">
        <p className="footer-built">
          Designed &amp; Built with by <strong>Aravind Kumar</strong>
        </p>
        <p className="footer-tag">&lt;Aravind /&gt;</p>
        <p className="footer-copy">© 2026 All rights reserved.</p>
      </div>
    </footer>
  )
}
