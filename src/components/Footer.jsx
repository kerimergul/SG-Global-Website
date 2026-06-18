import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { IconLinkedin, IconWhatsapp, IconMail, IconPhone } from './Icons'
import logo from '../assets/brand/logo-mark.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__top">
        <div className="footer__brand">
          <Link to="/" className="footer__logo">
            <img src={logo} alt="S&G Global Consultancy" />
          </Link>
          <p>
            SGK ve istihdam teşvikleri, vergi danışmanlığı, devlet destek &amp; hibeleri
            ve kurumsal eğitim hizmetleriyle işletmenizin yanındayız.
          </p>
          <div className="footer__social">
            <a href="#" aria-label="LinkedIn"><IconLinkedin width={20} height={20} /></a>
            <a href="https://wa.me/902120000000" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><IconWhatsapp width={20} height={20} /></a>
            <a href="mailto:info@sgglobal.com.tr" aria-label="E-posta"><IconMail width={20} height={20} /></a>
            <a href="tel:+902120000000" aria-label="Telefon"><IconPhone width={20} height={20} /></a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Hizmetler</h4>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link to={`/hizmetler/${s.slug}`}>{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Kurumsal</h4>
          <ul>
            <li><Link to="/hakkimizda">Hakkımızda</Link></li>
            <li><Link to="/hizmetler">Tüm Hizmetler</Link></li>
            <li><Link to="/referanslar">Referanslar</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>

        <div className="footer__col footer__contact">
          <h4>İletişim</h4>
          <ul>
            <li><a href="tel:+902120000000">+90 (212) 000 00 00</a></li>
            <li><a href="mailto:info@sgglobal.com.tr">info@sgglobal.com.tr</a></li>
            <li>Kadıköy, İstanbul / Türkiye</li>
          </ul>
          <Link to="/iletisim" className="btn btn--gold footer__cta">Ücretsiz Analiz</Link>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© 2018 S&amp;G Global Consultancy. Tüm hakları saklıdır.</p>
          <div className="footer__legal">
            <a href="#">Gizlilik Politikası</a>
            <a href="#">KVKK Aydınlatma Metni</a>
            <a href="#">Kullanım Koşulları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
