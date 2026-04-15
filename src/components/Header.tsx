'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`} id="site-header">
        <div className="container header-inner">
          <a href="#" className="logo" aria-label="Heard Chef home">
            <span className="material-symbols-outlined logo-icon">restaurant_menu</span>
            <span className="logo-text">Heard Chef</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#features">Features</a>
            <a href="#how">How it works</a>
            <a href="#waitlist" className="nav-cta">Join Waitlist</a>
          </nav>

          <button 
            className="hamburger" 
            id="hamburger-btn" 
            onClick={toggleMenu}
            aria-label="Open menu" 
            aria-expanded={isMenuOpen}
          >
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`} id="mobile-menu" role="dialog" aria-modal="true" aria-label="Navigation">
        <button className="mobile-menu-close" id="mobile-menu-close" onClick={closeMenu} aria-label="Close menu">
          <span className="material-symbols-outlined" style={{ fontSize: '2rem' }}>close</span>
        </button>
        <a href="#features" className="mobile-link" onClick={closeMenu}>Features</a>
        <a href="#how" className="mobile-link" onClick={closeMenu}>How It Works</a>
        <a href="#waitlist" className="mobile-link" onClick={closeMenu}>Join Waitlist</a>
      </div>
    </>
  )
}
