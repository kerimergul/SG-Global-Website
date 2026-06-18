import { useState } from 'react'
import { IconPlus } from './Icons'
import './FAQ.css'

const faqs = [
   {
    q: 'Hangi teşviklerden yararlanabileceğimi nasıl öğrenirim?',
    a: 'Ücretsiz ön analiz talebi oluşturmanız yeterli. Personel ve bordro yapınızı inceleyip yararlanabileceğiniz tüm teşvik türlerini ve tahmini avantajı çıkarıyoruz.',
  },
  {
    q: 'Danışmanlık süreci ne kadar sürüyor?',
    a: 'İlk analiz genellikle birkaç iş günü içinde tamamlanır. Başvuru ve düzeltme süreçleri firmanın yapısına göre değişmekle birlikte mümkün olan en kısa sürede sonuçlandırılır.',
  },
  {
    q: 'Verilerimin gizliliği nasıl korunuyor?',
    a: 'Tüm süreçler KVKK ve gizlilik sözleşmesi esaslarına göre yürütülür. Verileriniz yalnızca yetkili uzmanlarca, belirlenen amaç doğrultusunda işlenir.',
  },
  {
    q: 'Teşvik dışında vergi ve eğitim hizmetleri de veriyor musunuz?',
    a: 'Evet. SGK teşviklerinin yanı sıra vergi planlama, tam tasdik ve vergi inceleme danışmanlığı ile SGK, vergi, İK ve iş hukuku alanlarında kurumsal eğitim hizmetleri de sunuyoruz.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="sss" className="section faq">
      <div className="container faq__inner">
        <div className="faq__aside reveal">
          <span className="eyebrow">Sıkça Sorulan Sorular</span>
          <h2 className="section-title">Aklınızdaki soruların yanıtları</h2>
          <p className="section-sub">
            Aradığınızı bulamadıysanız, uzman ekibimiz size yardımcı olmaktan
            memnuniyet duyar.
          </p>
          <a href="#iletisim" className="btn btn--outline">Bize Sorun</a>
        </div>

        <div className="faq__list reveal">
          {faqs.map((f, i) => (
            <div key={f.q} className={`faq__item ${open === i ? 'is-open' : ''}`}>
              <button className="faq__q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <span className="faq__icon"><IconPlus width={20} height={20} /></span>
              </button>
              <div className="faq__a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
