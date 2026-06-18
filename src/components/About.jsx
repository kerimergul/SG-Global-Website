import { Link } from 'react-router-dom'
import { IconCheck, IconShield, IconTrending, IconHandshake } from './Icons'
import './About.css'

const values = [
  { icon: IconShield, title: 'Güven', text: 'Gizlilik ve mevzuat uyumu temelinde çalışırız.' },
  { icon: IconTrending, title: 'Sonuç', text: 'Ölçülebilir tasarruf ve somut değer üretiriz.' },
  { icon: IconHandshake, title: 'Ortaklık', text: 'Uzun vadeli, şeffaf iş birliği kurarız.' },
]

const bullets = [
  'SGK, vergi ve teşvik mevzuatında uzman kadro',
  'Kamu ve özel sektörde edinilmiş geniş tecrübe',
  'KVKK ve gizlilik esaslı çalışma prensibi',
  'Sektör bağımsız, ölçülebilir kurumsal çözümler',
]

export default function About() {
  return (
    <section id="hakkimizda" className="section section--soft about">
      <div className="container about__inner">
        <div className="about__visual reveal">
          <div className="about__panel">
            <span className="about__panel-tag">S&amp;G Global Consultancy</span>
            <p className="about__quote">
              “İşletmelerin hak ettiği teşvik ve desteklerden eksiksiz yararlanmasını
              sağlamak, mevzuat süreçlerini güvenle yönetmek için varız.”
            </p>
            <div className="about__values">
              {values.map((v) => {
                const Icon = v.icon
                return (
                  <div key={v.title} className="about__value">
                    <span className="about__value-ico"><Icon width={20} height={20} /></span>
                    <strong>{v.title}</strong>
                    <em>{v.text}</em>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="about__content reveal">
          <span className="eyebrow">Hakkımızda</span>
          <h2 className="section-title">SGK, vergi ve teşvik danışmanlığı tek çatı altında</h2>
          <p>
            S&amp;G Global Consultancy; SGK istihdam teşvikleri, vergi danışmanlığı,
            tam tasdik, devlet destek &amp; hibeleri ve kurumsal eğitim hizmetleri sunan
            bir danışmanlık şirketidir. İşletmelerin prim ve vergi maliyetlerini
            düşürmelerine, teşvik ve desteklerden eksiksiz yararlanmalarına yardımcı oluyoruz.
          </p>
          <p>
            Maliye ve SGK’da uzun yıllar görev yapmış uzmanlardan oluşan kadromuzla,
            her ölçekten firmaya sürdürülebilir ve ölçülebilir avantaj sağlıyoruz.
          </p>

          <ul className="about__bullets">
            {bullets.map((b) => (
              <li key={b}><span className="about__check"><IconCheck width={14} height={14} /></span>{b}</li>
            ))}
          </ul>

          <Link to="/iletisim" className="btn btn--primary">Bizimle İletişime Geçin</Link>
        </div>
      </div>
    </section>
  )
}
