import { useParams, Link, Navigate } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'
import { services, getService } from '../data/services'
import { IconCheck, IconArrow } from '../components/Icons'
import './ServiceDetail.css'

export default function ServiceDetail() {
  useReveal()
  const { slug } = useParams()
  const service = getService(slug)

  if (!service) return <Navigate to="/hizmetler" replace />

  const others = services.filter((s) => s.slug !== slug)
  const Icon = service.icon

  return (
    <>
      <PageHero
        eyebrow="Hizmet Detayı"
        title={service.title}
        subtitle={service.tagline}
        breadcrumb={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: service.title }]}
      />

      <section className="section svc-detail">
        <div className="container svc-detail__grid">
          <article className="svc-detail__main">
            <div className="svc-detail__lead reveal">
              <span className="svc-detail__icon"><Icon width={30} height={30} /></span>
              <p>{service.intro}</p>
            </div>

            <h2 className="svc-detail__h reveal">Sunduğumuz Hizmetler</h2>
            <div className="svc-detail__items reveal">
              {service.items.map((it) => (
                <div key={it.name} className="svc-detail__item">
                  <span className="svc-detail__check"><IconCheck width={15} height={15} /></span>
                  <div>
                    <strong>{it.name}</strong>
                    {it.desc && <p>{it.desc}</p>}
                  </div>
                </div>
              ))}
            </div>

            {service.groups && service.groups.map((g) => (
              <div key={g.title} className="svc-detail__group reveal">
                <h3>{g.title}</h3>
                <ul>
                  {g.list.map((item) => (
                    <li key={item}><IconCheck width={14} height={14} /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="svc-detail__cta reveal">
              <div>
                <h3>{service.title} için profesyonel destek alın</h3>
                <p>Uzman ekibimiz işletmenize özel çözümü birlikte değerlendirsin.</p>
              </div>
              <Link to="/iletisim" className="btn btn--gold">
                Ücretsiz Görüşme <IconArrow width={18} height={18} />
              </Link>
            </div>
          </article>

          <aside className="svc-detail__aside reveal">
            <div className="svc-detail__card">
              <h4>Diğer Hizmetler</h4>
              <ul>
                {others.map((s) => (
                  <li key={s.slug}>
                    <Link to={`/hizmetler/${s.slug}`}>
                      <span className="svc-detail__aside-ico"><s.icon width={20} height={20} /></span>
                      <span>{s.title}</span>
                      <IconArrow width={16} height={16} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="svc-detail__card svc-detail__card--dark">
              <h4>Hızlı İletişim</h4>
              <p>Sorularınız için hemen bize ulaşın.</p>
              <a href="tel:+902120000000" className="svc-detail__phone">+90 (212) 000 00 00</a>
              <Link to="/iletisim" className="btn btn--gold svc-detail__card-btn">Analiz Talep Et</Link>
            </div>
          </aside>
        </div>
      </section>

      <Contact />
    </>
  )
}
