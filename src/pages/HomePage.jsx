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
import { blogs, brands, companyUnits, events, projects, services } from '../data/content'

function HomePage() {
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
      <MapSection interactive locations={companyUnits} />
      <Footer />
    </>
  )
}

export default HomePage
