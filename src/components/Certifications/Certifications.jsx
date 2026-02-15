import { useState, useEffect, useCallback, useRef } from 'react'
import Section from '../Section/Section'
import { certifications } from '../../data/content'
import './Certifications.css'

const AUTO_PLAY_INTERVAL = 5000
const SLIDE_WIDTH = 220
const SLIDE_GAP = 20

function CertCard({ cert, imageError, onImageError, isCenter }) {
  const hasImage = cert.image && !imageError

  return (
    <article
      className={`cert-card ${hasImage ? 'cert-card--with-image' : 'cert-card--text-only'} ${isCenter ? 'cert-card--center' : 'cert-card--side'}`}
      onClick={() => hasImage && window.open(cert.image, '_blank')}
    >
      {hasImage ? (
        <div className="cert-card-inner">
          <div className="cert-card-frame">
            <div className="cert-card-image">
              <img
                src={cert.image}
                alt={`${cert.title} - ${cert.issuer}`}
                onError={onImageError}
              />
              <div className="cert-card-overlay">
                <span className="cert-card-view">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  View full size
                </span>
              </div>
            </div>
          </div>
          <div className="cert-card-info">
            <h3>{cert.title}</h3>
            <span className="cert-card-issuer">{cert.issuer}</span>
          </div>
        </div>
      ) : (
        <div className="cert-card-fallback">
          <div className="cert-card-fallback-icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
            </svg>
          </div>
          <h3>{cert.title}</h3>
          <span className="cert-card-issuer">{cert.issuer}</span>
        </div>
      )}
    </article>
  )
}

export default function Certifications() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState({})
  const viewportRef = useRef(null)
  const [viewportWidth, setViewportWidth] = useState(400)

  useEffect(() => {
    const el = viewportRef.current
    if (!el) return
    const update = () => setViewportWidth(el.offsetWidth)
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const total = certifications.length

  const goTo = useCallback((index) => {
    setActiveIndex((index + total) % total)
  }, [total])

  const next = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo])
  const prev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo])

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % total)
    }, AUTO_PLAY_INTERVAL)
    return () => clearInterval(id)
  }, [total])

  const handleImageError = (certKey) => {
    setImageErrors((prev) => ({ ...prev, [certKey]: true }))
  }

  const totalWidth = certifications.length * (SLIDE_WIDTH + SLIDE_GAP) - SLIDE_GAP
  const centerOffset = viewportWidth / 2 - SLIDE_WIDTH / 2
  const rawTranslate = centerOffset - activeIndex * (SLIDE_WIDTH + SLIDE_GAP)
  const minTranslate = viewportWidth - totalWidth
  const maxTranslate = centerOffset
  const translateX = Math.max(minTranslate, Math.min(maxTranslate, rawTranslate))

  return (
    <Section
      id="certifications"
      title="Certifications & "
      titleHighlight="Awards"
      subtitle="Credentials that validate expertise and commitment to growth."
    >
      <div className="certs-carousel">
        <div className="certs-carousel-viewport" ref={viewportRef}>
          <div
            className="certs-carousel-track"
            style={{
              transform: `translateX(${translateX}px)`,
            }}
          >
            {certifications.map((cert, i) => (
              <div
                key={`${cert.title}-${cert.issuer}`}
                className="certs-carousel-slide"
                style={{ width: SLIDE_WIDTH, minWidth: SLIDE_WIDTH }}
              >
                <CertCard
                  cert={cert}
                  imageError={imageErrors[`${cert.title}-${cert.issuer}`]}
                  onImageError={() => handleImageError(`${cert.title}-${cert.issuer}`)}
                  isCenter={i === activeIndex}
                />
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="carousel-btn carousel-btn--prev"
          onClick={prev}
          aria-label="Previous certificate"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          className="carousel-btn carousel-btn--next"
          onClick={next}
          aria-label="Next certificate"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        <div className="carousel-dots">
          {certifications.map((cert, i) => (
            <button
              key={`dot-${cert.title}-${cert.issuer}`}
              type="button"
              className={`carousel-dot ${i === activeIndex ? 'carousel-dot--active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to certificate ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
