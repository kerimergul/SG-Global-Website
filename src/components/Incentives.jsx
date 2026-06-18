import { IconCheck, IconSearch, IconDoc, IconChart, IconArrow } from './Icons'
import './Incentives.css'

const incentiveTypes = [
  '5510 Sayılı 5 Puanlık İndirim',
  '6111 Genç & Kadın İstihdam Teşviki',
  '7103 İlave İstihdam Teşviki',
  'Engelli İstihdamı Teşviki',
  'Yatırım Teşvik Belgesi Destekleri',
  'Ar-Ge & Tasarım Merkezi Teşvikleri',
  'İŞKUR İşbaşı Eğitim Destekleri',
  'Asgari Ücret Desteği',
]

const steps = [
  { icon: IconSearch, title: 'Tespit', text: 'Tüm personel ve dönemler taranarak uygun teşvikler belirlenir.' },
  { icon: IconChart, title: 'Hesaplama', text: 'Sağlanacak prim avantajı ve hak edişleriniz net rakamlarla raporlanır.' },
  { icon: IconDoc, title: 'Başvuru', text: 'Başvuru ve düzeltme bildirgeleri eksiksiz hazırlanıp sonuçlandırılır.' },
]

export default function Incentives() {
  return (
    <section id="tesvikler" className="section incentives">
      <div className="incentives__bg" aria-hidden="true" />
      <div className="container incentives__inner">
        <div className="incentives__left reveal">
          <span className="eyebrow eyebrow--light">Uzmanlık Alanımız</span>
          <h2 className="incentives__title">
            SGK Teşviklerinde <span>uçtan uca</span> danışmanlık
          </h2>
          <p className="incentives__lead">
            İşletmenizin yararlanabileceği teşvikleri eksiksiz tespit ediyor, başvuru
            ve uygulama süreçlerini uçtan uca yönetiyoruz. Tüm süreç uzman ekibimiz
            tarafından mevzuata tam uyumla yürütülür.
          </p>

          <ul className="incentives__list">
            {incentiveTypes.map((t) => (
              <li key={t}><span className="incentives__check"><IconCheck width={14} height={14} /></span>{t}</li>
            ))}
          </ul>

          <a href="#iletisim" className="btn btn--gold">
            Hangi Teşviklere Uygunsunuz? <IconArrow width={18} height={18} />
          </a>
        </div>

        <div className="incentives__right reveal">
          <div className="incentives__panel">
            <div className="incentives__panel-top">
              <span>Örnek Teşvik Raporu</span>
              <em>Aylık özet</em>
            </div>
            <div className="incentives__metric">
              <span className="incentives__metric-label">Tespit edilen aylık avantaj</span>
              <strong className="incentives__metric-value">₺ 184.500</strong>              
            </div>
            <div className="incentives__steps">
              {steps.map((s, i) => {
                const Icon = s.icon
                return (
                  <div className="incentives__step" key={s.title}>
                    <span className="incentives__step-no">{i + 1}</span>
                    <span className="incentives__step-ico"><Icon width={20} height={20} /></span>
                    <div>
                      <strong>{s.title}</strong>
                      <p>{s.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
