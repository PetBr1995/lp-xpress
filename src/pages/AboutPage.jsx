import { useState } from 'react'
import Footer from '../components/Footer'
import MapSection from '../components/MapSection'
import QuoteFormSection from '../components/QuoteFormSection'
import BrandCarousel from '../components/BrandCarousel'
import { brands, companyUnits } from '../data/content'
import Seo from '../components/Seo'

const values = [
  {
    title: 'Missão',
    text: 'Oferecer soluções em comunicação visual, gráfica rápida e personalização que ajudem empresas e pessoas a se comunicarem com mais clareza e impacto.',
    image:'/MISSAO.png'
  },
  {
    title: 'Visão',
    text: 'Ser referência em qualidade, agilidade e atendimento humano no segmento de comunicação visual e personalização.',
    image:'/VISAO.png'
  },
  {
    title: 'Valores',
    text: 'Qualidade em cada detalhe, respeito aos prazos, atendimento próximo, ética, criatividade e inovação.',
    image:'/VALORE.png'
  },
]

function AboutPage() {
  const [insideSlideIndex, setInsideSlideIndex] = useState(0)

  const insideSlides = ['PRODUÇÃO', 'ATENDIMENTO', 'ACABAMENTO', 'IMPRESSÃO']

  return (
    <>
      <Seo
        title="Sobre a Gráfica Xpress | Nossa História e Valores"
        description="Conheça a trajetória da Gráfica Xpress desde 2010, nossa missão, visão, valores e a estrutura completa para atender sua marca."
        pathname="/sobre"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Sobre a Gráfica Xpress',
          url: 'https://graficaxpress.com.br/sobre',
          description: 'História, missão, visão e valores da Gráfica Xpress.',
        }}
      />
      <section className="bg-[#8a8a8a] py-14 text-white max-[920px]:py-9" data-reveal="up">
        <div className="mx-auto w-full max-w-[960px] px-6 max-[920px]:px-4">
          <h1 className="m-0 text-[40px] leading-[1.1] max-[920px]:text-[28px]">
            Desde 2010, dando forma
            <br />
            aos sonhos e projetos dos
            <br />
            nossos clientes
          </h1>
          <div className="mb-5 mt-4 h-0.5 w-[70px] bg-white" />
          <p className="m-0 max-w-[780px] text-[18px] leading-[1.5] max-[920px]:text-[15px]">
            A <strong>Gráfica Xpress</strong> nasceu com o propósito de oferecer soluções em comunicação visual e
            gráfica rápida para os mais diversos segmentos. Contamos com tecnologia avançada para impressão,
            corte de materiais rígidos, marcenaria, bordados e muito mais, sempre focados em entregar produtos
            e serviços de alta qualidade.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-6 pb-12 pt-12 text-center max-[920px]:px-4 max-[920px]:pb-10 max-[920px]:pt-10" data-reveal="up">
        <h2 className="m-0 text-[36px] leading-[1.1] text-[#222a67] max-[920px]:text-[28px]">Uma trajetória construída em cada projeto entregue</h2>
        <div className="mx-auto mb-8 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
        <div className="grid grid-cols-4 gap-4 max-[920px]:grid-cols-2 max-[920px]:gap-3">
          {[1, 2, 3, 4].map((item, index) => (
            <div key={item} className="grid h-[160px] place-items-center rounded-md bg-[#8c8c8c] text-[14px] text-white" data-reveal="zoom" data-reveal-delay={index * 70}>FOTO</div>
          ))}
        </div>
      </section>

      <section className="flex min-h-[320px] items-center bg-[linear-gradient(120deg,rgba(8,16,41,0.7),rgba(20,29,62,0.45)),linear-gradient(140deg,#4b4f58,#6a717d_45%,#bd9b7b_48%,#6e4f39_75%,#2e3440)] py-12 text-center text-white max-[920px]:min-h-[290px] max-[920px]:py-10" data-reveal="up">
        <div className="mx-auto w-full max-w-[960px] px-6 max-[920px]:px-4">
          <h2 className="m-0 text-[36px] leading-[1.1] max-[920px]:text-[28px]">De portas abertas para receber você e sua marca</h2>
          <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
          <p className="m-0 mx-auto max-w-[780px] text-[18px] leading-[1.5] max-[920px]:text-[16px]">Nossa unidade conta com estrutura para atendimento presencial, retirada de materiais e acompanhamento de projetos.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-6 pb-12 pt-12 text-center max-[920px]:px-4 max-[920px]:pb-10 max-[920px]:pt-10" data-reveal="up">
        <h2 className="m-0 text-[36px] leading-[1.1] text-[#222a67] max-[920px]:text-[28px]">O que nos move todos os dias</h2>
        <div className="mx-auto mb-8 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
        <div className="grid grid-cols-3 gap-4 max-[920px]:grid-cols-1 max-[920px]:gap-4">
          {values.map((item, index) => (
            <article key={item.title} className="rounded-lg bg-[#8c3294] px-5 py-6 text-left text-white" data-reveal="up" data-reveal-delay={index * 80}>
              <img src={item.image} alt="icone" className='w-10' />
              <h3 className="my-2 text-[20px] font-black leading-[1.1]">{item.title}</h3>
              <p className="m-0 text-[14px] leading-[1.32]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[960px] grid-cols-[0.9fr_1.1fr] items-center gap-8 px-6 pb-12 pt-2 max-[920px]:grid-cols-1 max-[920px]:gap-5 max-[920px]:px-4 max-[920px]:pb-10" data-reveal="up">
        <div data-reveal="left" data-reveal-delay="70">
          <h2 className="m-0 text-[36px] leading-[1.1] text-[#222a67] max-[920px]:text-[28px]">
            <strong>Por dentro da Xpress:</strong>
            <br />
            onde as ideias ganham forma
          </h2>
          <div className="mb-5 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
        </div>
        <div className="relative grid min-h-[320px] place-items-center rounded-[2px] bg-[linear-gradient(140deg,#a5a8ad,#dbdbd2_40%,#7f8188)] p-4 text-white" data-reveal="right" data-reveal-delay="120">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={() => setInsideSlideIndex((prev) => (prev - 1 + insideSlides.length) % insideSlides.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 border-0 bg-transparent px-2 text-[24px] text-white/75 transition-colors hover:text-white"
          >
            &#8249;
          </button>

          <button
            type="button"
            aria-label="Próximo slide"
            onClick={() => setInsideSlideIndex((prev) => (prev + 1) % insideSlides.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 border-0 bg-transparent px-2 text-[24px] text-white/75 transition-colors hover:text-white"
          >
            &#8250;
          </button>

          <span className="mt-6 text-[18px] tracking-[0.03em]">
            {insideSlides[insideSlideIndex]}
          </span>

          <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 pb-2">
            {insideSlides.map((slide, index) => (
              <button
                key={slide}
                type="button"
                aria-label={`Ir para slide ${index + 1}`}
                onClick={() => setInsideSlideIndex(index)}
                className={`mx-1 h-1.5 w-1.5 rounded-full border-0 transition-all ${
                  index === insideSlideIndex ? 'bg-white' : 'bg-white/45 hover:bg-white/75'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#252a63] pt-12 text-white max-[920px]:pt-10" data-reveal="up">
        <div className="mx-auto w-full max-w-[960px] px-6 text-center max-[920px]:px-4">
          <h2 className="m-0 text-[36px] leading-[1.1] max-[920px]:text-[28px]">Marcas que confiam na Xpress para se comunicar melhor</h2>
          <div className="mx-auto mb-8 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
          <BrandCarousel brands={brands} />
        </div>

        <QuoteFormSection id="orcamento" variant="transparent" />
      </section>

      <MapSection interactive locations={companyUnits} />
      <Footer />
    </>
  )
}

export default AboutPage
