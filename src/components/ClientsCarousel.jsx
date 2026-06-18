import { Link } from 'react-router-dom'
import { clients } from '../data/clients'
import { IconArrow } from './Icons'
import './ClientsCarousel.css'

// Kesintisiz sonsuz akış için logoları iki gruba bölüp her birini kopyalarız
function Row({ items, reverse }) {
  const loop = [...items, ...items]
  return (
    <div className={`marquee ${reverse ? 'marquee--reverse' : ''}`}>
      <div className="marquee__track">
        {loop.map((c, i) => (
          <div className="marquee__item" key={`${c.name}-${i}`} title={c.name}>
            <img src={c.src} alt={`${c.name} logosu`} loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function ClientsCarousel() {
  const mid = Math.ceil(clients.length / 2)
  const rowA = clients.slice(0, mid)
  const rowB = clients.slice(mid)

  return (
    <section id="referanslar" className="section section--soft clients">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Referanslarımız</span>
          <h2 className="section-title">Türkiye’nin önde gelen kurumları bize güveniyor</h2>
          <p className="section-sub">
            Perakendeden sağlığa, gıdadan tekstile birçok sektörden {clients.length}+ kurumun
            teşvik, vergi ve danışmanlık süreçlerinde çözüm ortağıyız.
          </p>
        </div>
      </div>

      <div className="clients__marquees reveal">
        <Row items={rowA} />
        <Row items={rowB} reverse />
      </div>

      <div className="container clients__cta reveal">
        <Link to="/referanslar" className="btn btn--outline">
          Tüm Referanslarımız <IconArrow width={18} height={18} />
        </Link>
      </div>
    </section>
  )
}
