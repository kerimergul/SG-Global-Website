import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import Contact from '../components/Contact'

export default function ContactPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bizimle iletişime geçin"
        subtitle="İşletmenize özel teşvik, vergi ve danışmanlık çözümlerini birlikte değerlendirelim. Ücretsiz ön analiz için formu doldurun."
        breadcrumb={[{ label: 'İletişim' }]}
      />
      <Contact />
    </>
  )
}
