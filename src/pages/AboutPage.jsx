import { useReveal } from '../hooks/useReveal'
import PageHero from '../components/PageHero'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import Contact from '../components/Contact'

export default function AboutPage() {
  useReveal()
  return (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="S&G Global Consultancy"
        subtitle="SGK, vergi, devlet teşvik ve hibe danışmanlığı ile kurumsal eğitim hizmetlerini tek çatı altında sunan, kamu ve özel sektör tecrübesiyle güçlenmiş bir danışmanlık şirketi."
        breadcrumb={[{ label: 'Hakkımızda' }]}
      />
      <About />
      <WhyUs />
      <Process />
      <Contact />
    </>
  )
}
