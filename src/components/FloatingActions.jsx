import { useEffect, useState } from 'react'
import { IconWhatsapp, IconArrow } from './Icons'
import './FloatingActions.css'

export default function FloatingActions() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fab">
      <a
        href="https://wa.me/902120000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fab__wa"
        aria-label="WhatsApp ile iletişime geç"
      >
        <IconWhatsapp width={26} height={26} />
        <span className="fab__wa-pulse" />
      </a>
      <button
        className={`fab__top ${show ? 'is-show' : ''}`}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Yukarı çık"
      >
        <IconArrow width={20} height={20} style={{ transform: 'rotate(-90deg)' }} />
      </button>
    </div>
  )
}
