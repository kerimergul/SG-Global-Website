import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import { services } from '../data/services'
import { IconArrow, IconCheck } from '../components/Icons'
import './ServicesPage.css'

export default function ServicesPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Kurumsal danışmanlık hizmetlerimiz"
        subtitle="SGK ve istihdam teşviklerinden vergiye, devlet destek & hibelerinden kurumsal eğitime kadar işletmenizin tüm ihtiyaçları için bütünleşik çözümler."
        breadcrumb={[{ label: 'Hizmetler' }]}
      />

      <section className="section svc-list">
        <div className="container">
          {services.map((s, i) => {
            const Icon = s.icon
            return (
              <article key={s.slug} className={`svc-block reveal ${i % 2 ? 'svc-block--alt' : ''}`}>
                <div className="svc-block__head">
                  <span className="svc-block__icon"><Icon width={30} height={30} /></span>
                  <div>
                    <h2>{s.title}</h2>
                    <p className="svc-block__tagline">{s.tagline}</p>
                  </div>
                </div>
                <p className="svc-block__intro">{s.intro}</p>

                <ul className="svc-block__items">
                  {s.items.map((it) => (
                    <li key={it.name}>
                      <span className="svc-block__check"><IconCheck width={14} height={14} /></span>
                      <div>
                        <strong>{it.name}</strong>
                        {it.desc && <span>{it.desc}</span>}
                      </div>
                    </li>
                  ))}
                </ul>

                <Link to={`/hizmetler/${s.slug}`} className="btn btn--outline svc-block__btn">
                  Detaylı İncele <IconArrow width={18} height={18} />
                </Link>
              </article>
            )
          })}
        </div>
      </section>

      <Contact />
    </>
  )
}
