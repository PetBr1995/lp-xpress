import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import MapSection from '../components/MapSection'
import QuoteFormSection from '../components/QuoteFormSection'
import Seo from '../components/Seo'
import { companyUnits } from '../data/content'

const serviceHighlights = [
  {
    title: 'Comunicação Visual',
    description: 'Equipamentos de alta tecnologia para garantir impressões nítidas e duráveis, nos mais diversos formatos de mídia.',
    mediaSlides: ['BANNERS', 'ADESIVOS', 'LONAS', 'PLACAS'],
  },
  {
    title: 'Confecção',
    description: 'Trabalhamos com serviço de malharia para camisas, abadás e uniformes personalizados do jeito que você imaginar.',
    mediaSlides: ['UNIFORMES', 'CAMISAS', 'ABADÁS', 'JALECOS'],
  },
  {
    title: 'Gráfica Xpress',
    description: 'Serviços de gráfica rápida para facilitar seu dia a dia quando você precisar de materiais impressos.',
    mediaSlides: ['CADERNOS', 'FOLDERS', 'PANFLETOS', 'CARTÕES'],
  },
  {
    title: 'Brindes Personalizados',
    description: 'Variedade de brindes personalizados para empresas, eventos e datas especiais, tudo feito do jeitinho que você quiser.',
    mediaSlides: ['CANECAS', 'COPOS', 'CHAVEIROS', 'SQUEEZES'],
  },
  {
    title: 'Decoração de Eventos',
    description: 'Itens de decoração personalizados em diferentes modelos. A identidade do seu evento fica do jeito que você projetou.',
    mediaSlides: ['TOTENS DECORATIVOS', 'PAINÉIS', 'BACKDROPS', 'TOPOS'],
  },
]

function ServicesPage() {
  const [slideIndexByService, setSlideIndexByService] = useState({})
  const [textHeights, setTextHeights] = useState({})
  const [isMobileLayout, setIsMobileLayout] = useState(false)
  const textRefs = useRef({})

  useEffect(() => {
    const syncLayout = () => setIsMobileLayout(window.innerWidth <= 920)
    syncLayout()
    window.addEventListener('resize', syncLayout)
    return () => window.removeEventListener('resize', syncLayout)
  }, [])

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setTextHeights((prev) => {
        const next = { ...prev }
        let changed = false

        for (const entry of entries) {
          const title = entry.target.getAttribute('data-service-title')
          if (!title) continue

          const nextHeight = Math.round(entry.contentRect.height)
          if (next[title] !== nextHeight) {
            next[title] = nextHeight
            changed = true
          }
        }

        return changed ? next : prev
      })
    })

    Object.values(textRefs.current).forEach((node) => {
      if (node) observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Seo
        title="Serviços | Gráfica Xpress"
        description="Conheça os serviços da Gráfica Xpress: comunicação visual, confecção, gráfica rápida, brindes personalizados e decoração de eventos."
        pathname="/servicos"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Serviços | Gráfica Xpress',
          url: 'https://graficaxpress.com.br/servicos',
          description: 'Página de serviços da Gráfica Xpress.',
        }}
      />
      <section
        className="relative w-full overflow-hidden aspect-[1920/700] max-[768px]:aspect-[1080/700]"
        data-reveal="up"
      >
        <picture className="absolute inset-0">
          <source media="(max-width: 768px)" srcSet="/banners/25-[Xpress]Site-BANNERS-5-MOBILE.png" />
          <img
            src="/banners/25-[Xpress]Site-BANNERS-5.png"
            alt="Banner de serviços"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </picture>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-6 pb-12 pt-12 max-[920px]:px-4 max-[920px]:pb-10 max-[920px]:pt-9">
        {serviceHighlights.map((item, index) => {
          const reversed = index % 2 === 1
          const currentSlideIndex = slideIndexByService[item.title] ?? 0
          const slidesCount = item.mediaSlides.length
          const currentSlideLabel = item.mediaSlides[currentSlideIndex]

          const goToSlide = (nextIndex) => {
            setSlideIndexByService((prev) => ({
              ...prev,
              [item.title]: nextIndex,
            }))
          }

          const goToPrevious = () => {
            const previous = (currentSlideIndex - 1 + slidesCount) % slidesCount
            goToSlide(previous)
          }

          const goToNext = () => {
            const next = (currentSlideIndex + 1) % slidesCount
            goToSlide(next)
          }

          return (
            <article
              key={item.title}
              className={`mb-10 grid items-center gap-7 max-[920px]:mb-8 max-[920px]:gap-4 ${reversed ? 'grid-cols-[1.1fr_0.9fr] max-[920px]:grid-cols-1' : 'grid-cols-[0.9fr_1.1fr] max-[920px]:grid-cols-1'}`}
              data-reveal="up"
              data-reveal-delay={index * 70}
            >
              <div
                ref={(node) => {
                  textRefs.current[item.title] = node
                }}
                data-service-title={item.title}
                className={reversed ? 'order-2 max-[920px]:order-none' : ''}
                data-reveal={reversed ? 'right' : 'left'}
                data-reveal-delay="80"
              >
                <h2 className="m-0 text-[30px] leading-[1.1] text-[#8f2d91] max-[920px]:text-[24px]">{item.title}</h2>
                <div className="mb-5 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
                <p className="m-0 text-[17px] leading-[1.5] font-normal text-[#5b6179] max-[920px]:text-[15px]">
                  {item.description}
                </p>
              </div>

              <div
                className={`relative grid w-full place-items-center bg-[#8d8d8d] p-5 text-white max-[920px]:h-[220px] max-[920px]:w-full ${reversed ? 'order-1 max-[920px]:order-none' : ''}`}
                style={isMobileLayout
                  ? undefined
                  : {
                    height: `${textHeights[item.title] ?? 240}px`,
                  }}
                data-reveal={reversed ? 'left' : 'right'}
                data-reveal-delay="120"
              >
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={goToPrevious}
                  className="absolute left-0 top-1/2 -translate-y-1/2 border-0 bg-transparent px-2 text-[22px] text-[#d8d8d8] transition-colors hover:text-white"
                >
                  &#8249;
                </button>
                <button
                  type="button"
                  aria-label="Próximo"
                  onClick={goToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 border-0 bg-transparent px-2 text-[22px] text-[#d8d8d8] transition-colors hover:text-white"
                >
                  &#8250;
                </button>
                <span className="mt-5 text-[16px] tracking-[0.03em] transition-opacity duration-300">
                  {currentSlideLabel}
                </span>
                <div className="mt-1.5 flex">
                  {item.mediaSlides.map((slide, dotIndex) => (
                    <button
                      key={slide}
                      type="button"
                      aria-label={`Ir para slide ${dotIndex + 1}`}
                      onClick={() => goToSlide(dotIndex)}
                      className={`mx-1 h-1.5 w-1.5 rounded-full border-0 transition-all ${
                        dotIndex === currentSlideIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </article>
          )
        })}
      </section>

      <QuoteFormSection id="orcamento" />

      <MapSection interactive locations={companyUnits} />
      <Footer />
    </>
  )
}

export default ServicesPage
