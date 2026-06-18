import { Link } from 'react-router-dom'
import { IconArrow, IconCheck, IconTrending, IconShield, IconChart } from './Icons'
import './Hero.css'

const points = ['SGK Teşvik Analizi', 'Vergi & Tam Tasdik', 'Devlet Teşvik & Hibeleri']

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <span className="hero__glow hero__glow--1" />
        <span className="hero__glow hero__glow--2" />
        <span className="hero__grid" />
      </div>

      <div className="container hero__inner">
        <div className="hero__content reveal">
          <span className="hero__badge">
            <span className="hero__badge-dot" /> SGK, Vergi & Teşvik Danışmanlığı
          </span>

          <h1 className="hero__title">
            Teşvik ve desteklerden<br />
            <span className="hero__title-grad">maksimum fayda</span> sağlayın
          </h1>

          <p className="hero__desc">
            S&amp;G Global; SGK istihdam teşvikleri, vergi danışmanlığı, devlet
            destek &amp; hibeleri ve kurumsal eğitim hizmetleriyle işletmenizin
            maliyetlerini düşürür, mevzuat avantajlarını sonuna kadar değerlendirmenizi sağlar.
          </p>

          <ul className="hero__points">
            {points.map((p) => (
              <li key={p}><IconCheck width={18} height={18} /> {p}</li>
            ))}
          </ul>

          <div className="hero__actions">
            <Link to="/iletisim" className="btn btn--gold">
              Ücretsiz Teşvik Analizi <IconArrow width={18} height={18} />
            </Link>
            <Link to="/hizmetler" className="btn btn--ghost">Hizmetlerimiz</Link>
          </div>

          <div className="hero__trust">
            <div><strong>%100</strong><span>SGK Uyumu</span></div>
            <div className="hero__trust-div" />
            <div><strong>500+</strong><span>Analiz Edilen Firma</span></div>
            <div className="hero__trust-div" />
            <div><strong>15+</strong><span>Teşvik Türü</span></div>
          </div>
        </div>

        <div className="hero__visual reveal">
          <div className="hero__card hero__card--main">
            <div className="hero__card-head">
              <span className="hero__card-ico"><IconChart width={20} height={20} /></span>
              <div>
                <strong>Teşvik Tasarrufu</strong>
                <em>Aylık prim avantajı</em>
              </div>
            </div>
            <div className="hero__bars">
              <span style={{ height: '42%' }} />
              <span style={{ height: '58%' }} />
              <span style={{ height: '70%' }} />
              <span style={{ height: '86%' }} />
              <span style={{ height: '100%' }} className="is-peak" />
            </div>
            <div className="hero__card-foot">
              <span>Ocak</span><span>Mayıs</span>
            </div>
          </div>

          <div className="hero__chip hero__chip--1">
            <IconTrending width={20} height={20} />
            <div><strong>%32</strong><em>Maliyet düşüşü</em></div>
          </div>

          <div className="hero__chip hero__chip--2">
            <IconShield width={20} height={20} />
            <div><strong>Tam Uyum</strong><em>Risksiz teşvik</em></div>
          </div>
        </div>
      </div>
    </section>
  )
}
