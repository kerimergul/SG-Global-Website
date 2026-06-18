import { Link } from 'react-router-dom'
import { IconArrow } from '../components/Icons'
import './NotFound.css'

export default function NotFound() {
  return (
    <section className="notfound">
      <div className="container notfound__inner">
        <span className="notfound__code">404</span>
        <h1>Sayfa bulunamadı</h1>
        <p>Aradığınız sayfa taşınmış veya hiç var olmamış olabilir.</p>
        <Link to="/" className="btn btn--primary">
          Anasayfaya Dön <IconArrow width={18} height={18} />
        </Link>
      </div>
    </section>
  )
}
