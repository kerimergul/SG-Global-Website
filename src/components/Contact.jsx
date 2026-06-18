import { useState } from 'react'
import { IconPhone, IconMail, IconPin, IconClock, IconCheck, IconArrow } from './Icons'
import './Contact.css'

const info = [
  { icon: IconPhone, label: 'Telefon', value: '+90 (212) 000 00 00', href: 'tel:+902120000000' },
  { icon: IconMail, label: 'E-posta', value: 'info@sgglobal.com.tr', href: 'mailto:info@sgglobal.com.tr' },
  { icon: IconPin, label: 'Adres', value: 'Kadıköy, İstanbul / Türkiye', href: null },
  { icon: IconClock, label: 'Çalışma Saatleri', value: 'Hafta içi 09:00 – 18:00', href: null },
]

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Statik site: gerçek gönderim için form servisi (Formspree, kendi API'niz vb.) bağlanabilir.
    setSent(true)
  }

  return (
    <section id="iletisim" className="section contact">
      <div className="container">
        <div className="contact__card reveal">
          <div className="contact__info">
            <span className="eyebrow eyebrow--light">İletişim</span>
            <h2 className="contact__title">Ücretsiz teşvik analizinizi başlatın</h2>
            <p className="contact__lead">
              Formu doldurun, uzman ekibimiz en kısa sürede sizinle iletişime geçsin.
              İşletmenize özel teşvik fırsatlarını birlikte değerlendirelim.
            </p>

            <ul className="contact__list">
              {info.map((it) => {
                const Icon = it.icon
                const content = (
                  <>
                    <span className="contact__list-ico"><Icon width={20} height={20} /></span>
                    <span>
                      <em>{it.label}</em>
                      <strong>{it.value}</strong>
                    </span>
                  </>
                )
                return (
                  <li key={it.label}>
                    {it.href ? <a href={it.href}>{content}</a> : <div>{content}</div>}
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="contact__form-wrap">
            {sent ? (
              <div className="contact__success">
                <span className="contact__success-ico"><IconCheck width={34} height={34} /></span>
                <h3>Talebiniz alındı!</h3>
                <p>En kısa sürede sizinle iletişime geçeceğiz. İlginiz için teşekkür ederiz.</p>
                <button className="btn btn--outline" onClick={() => setSent(false)}>Yeni Talep Oluştur</button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <div className="contact__row">
                  <label>
                    Ad Soyad
                    <input type="text" name="name" placeholder="Adınız Soyadınız" required />
                  </label>
                  <label>
                    Firma
                    <input type="text" name="company" placeholder="Firma adı" />
                  </label>
                </div>
                <div className="contact__row">
                  <label>
                    E-posta
                    <input type="email" name="email" placeholder="ornek@firma.com" required />
                  </label>
                  <label>
                    Telefon
                    <input type="tel" name="phone" placeholder="05XX XXX XX XX" required />
                  </label>
                </div>
                <label>
                  İlgilendiğiniz Hizmet
                  <select name="service" defaultValue="">
                    <option value="" disabled>Seçiniz</option>
                    <option>SGK &amp; Sosyal Güvenlik</option>
                    <option>Vergi Hizmetleri</option>
                    <option>Devlet Teşvik, Destek ve Hibeleri</option>
                    <option>Eğitim Hizmetleri</option>
                  </select>
                </label>
                <label>
                  Mesajınız
                  <textarea name="message" rows="4" placeholder="İhtiyacınızı kısaca anlatın..."></textarea>
                </label>
                <button type="submit" className="btn btn--gold contact__submit">
                  Ücretsiz Analiz Talep Et <IconArrow width={18} height={18} />
                </button>
                <p className="contact__note">
                  Göndererek <a href="#">gizlilik politikamızı</a> kabul etmiş olursunuz.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
