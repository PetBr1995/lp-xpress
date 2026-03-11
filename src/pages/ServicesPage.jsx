import Footer from '../components/Footer'
import MapSection from '../components/MapSection'
import QuoteFormSection from '../components/QuoteFormSection'

const serviceHighlights = [
  {
    title: 'Comunicação Visual',
    description: 'Equipamentos de alta tecnologia para garantir impressões nítidas e duráveis, nos mais diversos formatos de mídia.',
    mediaLabel: 'BANNERS',
  },
  {
    title: 'Confecção',
    description: 'Trabalhamos com serviço de malharia para camisas, abadás e uniformes personalizados do jeito que você imaginar.',
    mediaLabel: 'UNIFORMES',
  },
  {
    title: 'Gráfica Xpress',
    description: 'Serviços de gráfica rápida para facilitar seu dia a dia quando você precisar de materiais impressos.',
    mediaLabel: 'CADERNOS',
  },
  {
    title: 'Brindes Personalizados',
    description: 'Variedade de brindes personalizados para empresas, eventos e datas especiais, tudo feito do jeitinho que você quiser.',
    mediaLabel: 'CANECA',
  },
  {
    title: 'Decoração de Eventos',
    description: 'Itens de decoração personalizados em diferentes modelos. A identidade do seu evento fica do jeito que você projetou.',
    mediaLabel: 'TOTENS DECORATIVOS',
  },
]

function ServicesPage() {
  const servicesMapEmbedUrl =
    'https://www.google.com/maps?q=-3.093978,-59.9965769&z=18&output=embed'
  const servicesMapLinkUrl =
    'https://www.google.com/maps/place/Digital+Comunica%C3%A7%C3%A3o/@-3.094277,-59.9973221,19.54z/data=!4m7!3m6!1s0x926c1acf522d7923:0x3750b368bca24011!4b1!8m2!3d-3.093978!4d-59.9965769!16s%2Fg%2F1q62bwj4m?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D'

  return (
    <>
      <section className="services-banner">
        <span>BANNER</span>
      </section>

      <section className="container services-listing">
        {serviceHighlights.map((item, index) => (
          <article key={item.title} className={`service-row ${index % 2 ? 'reverse' : ''}`}>
            <div className="service-text">
              <h2>{item.title}</h2>
              <div className="service-line" />
              <p>{item.description}</p>
            </div>
            <div className="service-media">
              <button type="button" aria-label="Anterior">◌</button>
              <button type="button" aria-label="Próximo">◌</button>
              <span>{item.mediaLabel}</span>
              <small>• • • •</small>
            </div>
          </article>
        ))}
      </section>

      <QuoteFormSection id="orcamento" className="services-quote" />

      <MapSection interactive mapEmbedUrl={servicesMapEmbedUrl} mapLinkUrl={servicesMapLinkUrl} />
      <Footer />
    </>
  )
}

export default ServicesPage
