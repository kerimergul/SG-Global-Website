import { useReveal } from '../hooks/useReveal'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Incentives from '../components/Incentives'
import ClientsCarousel from '../components/ClientsCarousel'
import WhyUs from '../components/WhyUs'
import Process from '../components/Process'
import About from '../components/About'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

export default function Home() {
  useReveal()
  return (
    <>
      <Hero />
      <Services />
      <Incentives />
      <ClientsCarousel />
      <WhyUs />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}
