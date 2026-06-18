import { IconSearch, IconDoc, IconLayers, IconCheck } from './Icons'
import './Process.css'

const steps = [
  { icon: IconSearch, title: 'Keşif & Analiz', text: 'Mevcut SGK durumunuz, bordro ve personel verileriniz detaylı incelenir.' },
  { icon: IconDoc, title: 'Raporlama', text: 'Uygun teşvikler ve sağlanacak tasarruf net rakamlarla raporlanır.' },
  { icon: IconLayers, title: 'Uygulama', text: 'Başvuru, düzeltme ve entegrasyon süreçleri uzman ekipçe yürütülür.' },
  { icon: IconCheck, title: 'Takip & Destek', text: 'Sonuçlar takip edilir, sürekli danışmanlık ve denetimle desteklenir.' },
]

export default function Process() {
  return (
    <section id="surec" className="section process">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Çalışma Sürecimiz</span>
          <h2 className="section-title">Net, şeffaf ve sonuç odaklı 4 adım</h2>
          <p className="section-sub">
            İlk görüşmeden sonuç takibine kadar her aşamada yanınızdayız.
          </p>
        </div>

        <div className="process__track">
          {steps.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={s.title} className="process__step reveal" style={{ transitionDelay: `${i * 90}ms` }}>
                <div className="process__node">
                  <span className="process__ico"><Icon width={26} height={26} /></span>
                  <span className="process__no">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
