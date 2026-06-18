import { useEffect, useRef, useState } from 'react'
import { IconShield, IconClock, IconUsers, IconChart, IconLayers, IconHandshake } from './Icons'
import './WhyUs.css'

const features = [
  { icon: IconShield, title: 'Tam Mevzuat Uyumu', text: 'Tüm süreçler güncel SGK mevzuatına %100 uyumlu yürütülür, ceza riski taşımaz.' },
  { icon: IconChart, title: 'Ölçülebilir Tasarruf', text: 'Sağladığımız avantajı net rakamlarla raporlar, somut tasarruf sunarız.' },
  { icon: IconClock, title: 'Hızlı Sonuç', text: 'Geriye dönük teşvik tespiti ve başvurularını en kısa sürede sonuçlandırırız.' },
  { icon: IconUsers, title: 'Uzman Kadro', text: 'SGK, bordro ve mevzuat alanında deneyimli uzmanlardan oluşan ekip.' },
  { icon: IconLayers, title: 'Entegre Çözüm', text: 'SGK, vergi, teşvik ve eğitimi tek çatı altında birleştiren bütünleşik yaklaşım.' },
  { icon: IconHandshake, title: 'Şeffaf İş Birliği', text: 'Gizlilik esaslı, raporlanabilir ve uzun vadeli çözüm ortaklığı.' },
]

const stats = [
  { value: 500, suffix: '+', label: 'Analiz edilen firma' },
  { value: 32, suffix: '%', label: 'Ortalama maliyet düşüşü' },
  { value: 15, suffix: '+', label: 'Yönetilen teşvik türü' },
  { value: 10, suffix: ' Yıl', label: 'Sektör deneyimi' },
]

function Counter({ value, suffix }) {
  const [n, setN] = useState(0)
  const ref = useRef(null)
  const done = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true
          const dur = 1400
          const start = performance.now()
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1)
            const eased = 1 - Math.pow(1 - p, 3)
            setN(Math.round(eased * value))
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [value])

  return <span ref={ref}>{n}{suffix}</span>
}

export default function WhyUs() {
  return (
    <section id="neden-biz" className="section section--soft whyus">
      <div className="container">
        <div className="section-head section-head--center reveal">
          <span className="eyebrow">Neden S&amp;G Global?</span>
          <h2 className="section-title">Güvenilir bir çözüm ortağıyla çalışmanın farkı</h2>
          <p className="section-sub">
            Uzmanlık, şeffaflık ve teknolojiyi birleştirerek işletmenize sürdürülebilir avantaj sağlıyoruz.
          </p>
        </div>

        <div className="whyus__grid">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <article key={f.title} className="whyus__card reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <span className="whyus__icon"><Icon width={24} height={24} /></span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            )
          })}
        </div>

        <div className="whyus__stats reveal">
          {stats.map((s) => (
            <div key={s.label} className="whyus__stat">
              <strong><Counter value={s.value} suffix={s.suffix} /></strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
