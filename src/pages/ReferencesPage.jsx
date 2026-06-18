import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import { clients } from '../data/clients'
import { IconArrow } from '../components/Icons'
import './ReferencesPage.css'

export default function ReferencesPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Referanslarımız"
        title="Bize güvenen kurumlar"
        subtitle={`Perakende, sağlık, gıda, tekstil, turizm ve daha birçok sektörden ${clients.length}+ kurumun teşvik, vergi ve danışmanlık süreçlerinde çözüm ortağıyız.`}
        breadcrumb={[{ label: 'Referanslar' }]}
      />

      <section className="section ref-page">
        <div className="container">
          <div className="ref-grid reveal">
            {clients.map((c) => (
              <div className="ref-grid__item" key={c.name} title={c.name}>
                <img src={c.src} alt={`${c.name} logosu`} loading="lazy" />
              </div>
            ))}
          </div>

          <div className="ref-page__cta reveal">
            <h2>Siz de avantajlı çözümlerimizden yararlanın</h2>
            <p>İşletmenize özel teşvik ve danışmanlık fırsatlarını birlikte değerlendirelim.</p>
            <Link to="/iletisim" className="btn btn--primary">
              Ücretsiz Analiz Talep Et <IconArrow width={18} height={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
