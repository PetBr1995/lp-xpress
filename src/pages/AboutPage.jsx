import Footer from '../components/Footer'
import MapSection from '../components/MapSection'
import QuoteFormSection from '../components/QuoteFormSection'
import { brands } from '../data/content'

const values = [
  {
    title: 'Missão',
    text: 'Oferecer soluções em comunicação visual, gráfica rápida e personalização que ajudem empresas e pessoas a se comunicarem com mais clareza e impacto.',
  },
  {
    title: 'Visão',
    text: 'Ser referência em qualidade, agilidade e atendimento humano no segmento de comunicação visual e personalização.',
  },
  {
    title: 'Valores',
    text: 'Qualidade em cada detalhe, respeito aos prazos, atendimento próximo, ética, criatividade e inovação.',
  },
]

function AboutPage() {
  const aboutMapEmbedUrl =
    'https://www.google.com/maps?q=-3.093978,-59.9965769&z=18&output=embed'
  const aboutMapLinkUrl =
    'https://www.google.com/maps/place/Digital+Comunica%C3%A7%C3%A3o/@-3.094277,-59.9973221,19.54z/data=!4m7!3m6!1s0x926c1acf522d7923:0x3750b368bca24011!4b1!8m2!3d-3.093978!4d-59.9965769!16s%2Fg%2F1q62bwj4m?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D'

  return (
    <>
      <section className="about-hero">
        <div className="container">
          <h1>
            Desde 2010, dando forma
            <br />
            aos sonhos e projetos dos
            <br />
            nossos clientes
          </h1>
          <div className="service-line about-line" />
          <p>
            A <strong>Gráfica Xpress</strong> nasceu com o propósito de oferecer soluções em comunicação visual e
            gráfica rápida para os mais diversos segmentos. Contamos com tecnologia avançada para impressão,
            corte de materiais rígidos, marcenaria, bordados e muito mais, sempre focados em entregar produtos
            e serviços de alta qualidade.
          </p>
        </div>
      </section>

      <section className="container about-journey">
        <h2>Uma trajetória construída em cada projeto entregue</h2>
        <div className="service-line center" />
        <div className="journey-grid">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="journey-photo">FOTO</div>
          ))}
        </div>
      </section>

      <section className="about-banner-image">
        <div className="container about-banner-content">
          <h2>De portas abertas para receber você e sua marca</h2>
          <div className="service-line center" />
          <p>Nossa unidade conta com estrutura para atendimento presencial, retirada de materiais e acompanhamento de projetos.</p>
        </div>
      </section>

      <section className="container about-values">
        <h2>O que nos move todos os dias</h2>
        <div className="service-line center" />
        <div className="values-grid">
          {values.map((item) => (
            <article key={item.title} className="value-card">
              <span>◉</span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container about-inside">
        <div className="inside-text">
          <h2>
            <strong>Por dentro da Xpress:</strong>
            <br />
            onde as ideias ganham forma
          </h2>
          <div className="service-line" />
        </div>
        <div className="inside-media">
          <small>• • • •</small>
        </div>
      </section>

      <section className="about-dark">
        <div className="container about-brands">
          <h2>Marcas que confiam na Xpress para se comunicar melhor</h2>
          <div className="service-line center" />
          <div className="brand-row">
            {brands.map((brand) => (
              <img
                key={brand.name}
                className="brand-logo"
                src={brand.src}
                alt={`Logo ${brand.name}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <QuoteFormSection id="orcamento" className="about-quote" />
      </section>

      <MapSection interactive mapEmbedUrl={aboutMapEmbedUrl} mapLinkUrl={aboutMapLinkUrl} />
      <Footer />
    </>
  )
}

export default AboutPage
