import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { IconArrow } from './Icons'
import './Services.css'

export default function Services() {
  return (
    <section id="hizmetler" className="section services">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Hizmetlerimiz</span>
          <h2 className="section-title">İşletmenize değer katan uçtan uca çözümler</h2>
          <p className="section-sub">
            SGK ve istihdam teşviklerinden vergiye, devlet destek ve hibelerinden
            eğitime kadar tüm kurumsal ihtiyaçlarınızda tek çözüm ortağı.
          </p>
        </div>

        <div className="services__grid">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <article
                key={s.slug}
                className={`service-card reveal ${i === 0 ? 'service-card--featured' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                {i === 0 && <span className="service-card__flag">Öne Çıkan</span>}
                <span className="service-card__icon"><Icon width={26} height={26} /></span>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__desc">{s.summary}</p>
                <ul className="service-card__tags">
                  {s.items.slice(0, 3).map((it) => <li key={it.name}>{it.name}</li>)}
                </ul>
                <Link to={`/hizmetler/${s.slug}`} className="service-card__link">
                  Detaylı bilgi <IconArrow width={16} height={16} />
                </Link>
              </article>
            )
          })}
        </div>

        <div className="services__foot reveal">
          <Link to="/hizmetler" className="btn btn--primary">
            Tüm Hizmetleri İncele <IconArrow width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
