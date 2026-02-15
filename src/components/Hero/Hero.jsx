import { useEffect, useState } from 'react'
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { profileImage } from '../../data/content'
import './Hero.css'

const FLIP_INTERVAL = 3500

export default function Hero() {
  const [flipped, setFlipped] = useState(false)
  const [imageError, setImageError] = useState(false)
  const contentRef = useScrollReveal({ delay: 0 })
  const photoRef = useScrollReveal({ delay: 150 })
  const titleRef = useScrollReveal({ delay: 100 })
  const subtitleRef = useScrollReveal({ delay: 200 })
  const taglineRef = useScrollReveal({ delay: 300 })
  const actionsRef = useScrollReveal({ delay: 400 })
  const statsRef = useScrollReveal({ delay: 450 })

  useEffect(() => {
    const id = setInterval(() => setFlipped((f) => !f), FLIP_INTERVAL)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-inner wrap">
        <div className="hero-content">
          <p className="hero-greeting animate-hero" ref={contentRef}>
            Hello, I'm
          </p>
          <h1 className="hero-title animate-hero" ref={titleRef}>
            Aravind Kumar
          </h1>
          <p className="hero-subtitle animate-hero" ref={subtitleRef}>
            Architecting the Future of AI
          </p>
          <p className="hero-tagline animate-hero" ref={taglineRef}>
            Bridging the gap between analytical AI and immersive web interfaces.
          </p>
          <div className="hero-actions animate-hero" ref={actionsRef}>
            <a href="#projects" className="btn btn-primary">
              Explore Work
            </a>
            <a href="#contact" className="btn btn-outline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-visual animate-hero" ref={photoRef}>
          <div className="hero-profile-frame">
            <div className="hero-profile-ring" />
            <div className={`hero-profile-flip ${flipped ? 'flipped' : ''}`}>
              <div className="hero-profile-front">
                <span>AK</span>
              </div>
              <div className="hero-profile-back">
                {imageError ? (
                  <span className="hero-profile-placeholder">Photo</span>
                ) : (
                  <img
                    src={profileImage}
                    alt="Aravind Kumar"
                    onError={() => setImageError(true)}
                  />
                )}
              </div>
            </div>
          </div>
          <div className="hero-stats animate-hero" ref={statsRef}>
            <div className="hero-stat">
              <span className="hero-stat-value">8.6</span>
              <span className="hero-stat-label">CGPA</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">10+</span>
              <span className="hero-stat-label">Projects</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-value">AI</span>
              <span className="hero-stat-label">Intern</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll" aria-hidden="true">
        <span className="hero-scroll-line" />
      </div>
    </section>
  )
}
