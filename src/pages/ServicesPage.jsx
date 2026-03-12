import { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import MapSection from '../components/MapSection'
import QuoteFormSection from '../components/QuoteFormSection'
import Seo from '../components/Seo'

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

  const servicesMapEmbedUrl =
    'https://www.google.com/maps?q=-3.093978,-59.9965769&z=18&output=embed'
  const servicesMapLinkUrl =
    'https://www.google.com/maps/place/Digital+Comunica%C3%A7%C3%A3o/@-3.094277,-59.9973221,19.54z/data=!4m7!3m6!1s0x926c1acf522d7923:0x3750b368bca24011!4b1!8m2!3d-3.093978!4d-59.9965769!16s%2Fg%2F1q62bwj4m?entry=ttu&g_ep=EgoyMDI2MDMxMC4wIKXMDSoASAFQAw%3D%3D'

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
      <section className="grid h-[305px] place-items-center bg-[#8e8e8e] tracking-[0.03em] text-[#f3f3f3]" data-reveal="up">
        <span>BANNER</span>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-6 pb-[38px] pt-10">
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
              className={`mb-7 grid items-center gap-7 max-[920px]:mb-10 max-[920px]:gap-5 ${reversed ? 'grid-cols-[1.1fr_0.9fr] max-[920px]:grid-cols-1' : 'grid-cols-[0.9fr_1.1fr] max-[920px]:grid-cols-1'}`}
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
                <h2 className="m-0 text-[38px] leading-[1.1] text-[#8f2d91] max-[920px]:text-[30px]">{item.title}</h2>
                <div className="mb-5 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
                <p className="m-0 text-[29px] leading-[1.22] font-normal text-[#5b6179] max-[920px]:text-[18px]">
                  {item.description}
                </p>
              </div>

              <div
                className={`relative grid w-full place-items-center bg-[#8d8d8d] p-4 text-white max-[920px]:h-[260px] max-[920px]:w-full ${reversed ? 'order-1 max-[920px]:order-none' : ''}`}
                style={isMobileLayout
                  ? undefined
                  : {
                    height: `${textHeights[item.title] ?? 260}px`,
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
                <span className="mt-6 text-[22px] transition-opacity duration-300">
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

      <MapSection interactive mapEmbedUrl={servicesMapEmbedUrl} mapLinkUrl={servicesMapLinkUrl} />
      <Footer />
    </>
  )
}

export default ServicesPage
