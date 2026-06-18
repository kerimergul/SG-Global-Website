import { Link } from 'react-router-dom'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, breadcrumb = [] }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg" aria-hidden="true">
        <span className="page-hero__glow" />
        <span className="page-hero__grid" />
      </div>
      <div className="container page-hero__inner">
        <nav className="page-hero__crumb" aria-label="breadcrumb">
          <Link to="/">Anasayfa</Link>
          {breadcrumb.map((b) => (
            <span key={b.label}>
              <i>/</i>
              {b.to ? <Link to={b.to}>{b.label}</Link> : <em>{b.label}</em>}
            </span>
          ))}
        </nav>
        {eyebrow && <span className="eyebrow eyebrow--light">{eyebrow}</span>}
        <h1 className="page-hero__title">{title}</h1>
        {subtitle && <p className="page-hero__sub">{subtitle}</p>}
      </div>
    </section>
  )
}
