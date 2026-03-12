import AboutSection from '../components/AboutSection'
import BlogSection from '../components/BlogSection'
import BrandsSection from '../components/BrandsSection'
import EventsSection from '../components/EventsSection'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import MapSection from '../components/MapSection'
import ProjectsSection from '../components/ProjectsSection'
import Seo from '../components/Seo'
import ServicesSection from '../components/ServicesSection'
import { blogs, brands, events, projects, services } from '../data/content'

function HomePage() {
  const homeMapEmbedUrl =
    'https://www.google.com/maps?q=-3.093978,-59.9965769&z=18&output=embed'
  const homeMapLinkUrl =
    'https://www.google.com/maps/place/Digital+Comunica%C3%A7%C3%A3o/@-3.094277,-59.9973221,19.54z/data=!4m7!3m6!1s0x926c1acf522d7923:0x3750b368bca24011!4b1!8m2!3d-3.093978!4d-59.9965769!16s%2Fg%2F1q62bwj4m?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D'

  return (
    <>
      <Seo
        title="Gráfica Xpress | Comunicação Visual e Gráfica Rápida em Manaus"
        description="A Gráfica Xpress oferece soluções em comunicação visual, gráfica rápida, personalizados e decoração de eventos em Manaus."
        pathname="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Gráfica Xpress',
          url: 'https://graficaxpress.com.br',
          logo: 'https://graficaxpress.com.br/XPRESS_BRANCA.png',
          contactPoint: {
            '@type': 'ContactPoint',
            telephone: '+55-92-3087-4450',
            contactType: 'customer service',
            areaServed: 'BR',
            availableLanguage: 'pt-BR',
          },
        }}
      />
      <HeroSection />
      <AboutSection />
      <ServicesSection services={services} />
      <EventsSection events={events} />
      <ProjectsSection projects={projects} />
      <BrandsSection brands={brands} />
      <BlogSection blogs={blogs} />
      <MapSection interactive mapEmbedUrl={homeMapEmbedUrl} mapLinkUrl={homeMapLinkUrl} />
      <Footer />
    </>
  )
}

export default HomePage
