import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { IconArrow, IconPlus } from './Icons'
import { services } from '../data/services'
import logo from '../assets/brand/logo-text.png'
import './Navbar.css'

const navLinks = [
  { to: '/', label: 'Anasayfa', end: true },
  { to: '/hizmetler', label: 'Hizmetler', dropdown: true },
  { to: '/referanslar', label: 'Referanslar' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [subOpen, setSubOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Sayfa değişince menüleri kapat
  useEffect(() => { setOpen(false); setSubOpen(false) }, [location.pathname])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="container nav__inner">
        <Link to="/" className="brand" aria-label="S&G Global ana sayfa">
          <img src={logo} alt="S&G Global Consultancy" className="brand__img" />
        </Link>

        <nav className={`nav__menu ${open ? 'is-open' : ''}`}>
          <ul>
            {navLinks.map((l) => (
              <li key={l.to} className={l.dropdown ? 'has-sub' : ''}>
                <div className="nav__item-row">
                  <NavLink to={l.to} end={l.end} className={({ isActive }) => (isActive ? 'is-active' : '')}>
                    {l.label}
                  </NavLink>
                  {l.dropdown && (
                    <button
                      className={`nav__sub-toggle ${subOpen ? 'is-open' : ''}`}
                      onClick={() => setSubOpen((v) => !v)}
                      aria-label="Hizmet alt menüsü"
                    >
                      <IconPlus width={16} height={16} />
                    </button>
                  )}
                </div>

                {l.dropdown && (
                  <div className={`nav__dropdown ${subOpen ? 'is-open' : ''}`}>
                    {services.map((s) => (
                      <Link key={s.slug} to={`/hizmetler/${s.slug}`} className="nav__drop-item">
                        <span className="nav__drop-ico"><s.icon width={20} height={20} /></span>
                        <span>
                          <strong>{s.title}</strong>
                          <em>{s.tagline}</em>
                        </span>
                      </Link>
                    ))}
                    <Link to="/hizmetler" className="nav__drop-all">
                      Tüm Hizmetleri Gör <IconArrow width={16} height={16} />
                    </Link>
                  </div>
                )}
              </li>
            ))}
          </ul>
          <Link to="/iletisim" className="btn btn--gold nav__cta--mobile">
            Ücretsiz Analiz <IconArrow width={18} height={18} />
          </Link>
        </nav>

        <Link to="/iletisim" className="btn btn--gold nav__cta">
          Ücretsiz Analiz <IconArrow width={18} height={18} />
        </Link>

        <button
          className={`burger ${open ? 'is-open' : ''}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
        >
          <span /><span /><span />
        </button>
      </div>
      {open && <div className="nav__backdrop" onClick={() => setOpen(false)} />}
    </header>
  )
}
