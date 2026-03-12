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
      <section className="bg-[#8a8a8a] py-[66px] text-white max-[920px]:py-12">
        <div className="mx-auto w-full max-w-[960px] px-6">
          <h1 className="m-0 text-[56px] leading-[1.08] max-[920px]:text-[34px]">
            Desde 2010, dando forma
            <br />
            aos sonhos e projetos dos
            <br />
            nossos clientes
          </h1>
          <div className="mb-5 mt-4 h-0.5 w-[70px] bg-white" />
          <p className="m-0 max-w-[780px] text-[26px] leading-[1.3] max-[920px]:text-[18px]">
            A <strong>Gráfica Xpress</strong> nasceu com o propósito de oferecer soluções em comunicação visual e
            gráfica rápida para os mais diversos segmentos. Contamos com tecnologia avançada para impressão,
            corte de materiais rígidos, marcenaria, bordados e muito mais, sempre focados em entregar produtos
            e serviços de alta qualidade.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-6 pb-11 pt-11 text-center">
        <h2 className="m-0 text-[48px] leading-[1.1] text-[#222a67] max-[920px]:text-[34px]">Uma trajetória construída em cada projeto entregue</h2>
        <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
        <div className="grid grid-cols-4 gap-2 max-[920px]:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="grid h-[140px] place-items-center rounded-md bg-[#8c8c8c] text-[14px] text-white">FOTO</div>
          ))}
        </div>
      </section>

      <section className="flex min-h-[320px] items-center bg-[linear-gradient(120deg,rgba(8,16,41,0.7),rgba(20,29,62,0.45)),linear-gradient(140deg,#4b4f58,#6a717d_45%,#bd9b7b_48%,#6e4f39_75%,#2e3440)] py-12 text-center text-white">
        <div className="mx-auto w-full max-w-[960px] px-6">
          <h2 className="m-0 text-[48px] leading-[1.1] max-[920px]:text-[34px]">De portas abertas para receber você e sua marca</h2>
          <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
          <p className="m-0 mx-auto max-w-[780px] text-[24px] max-[920px]:text-[18px]">Nossa unidade conta com estrutura para atendimento presencial, retirada de materiais e acompanhamento de projetos.</p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-6 pb-10 pt-[46px] text-center">
        <h2 className="m-0 text-[48px] leading-[1.1] text-[#222a67] max-[920px]:text-[34px]">O que nos move todos os dias</h2>
        <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
        <div className="grid grid-cols-3 gap-2 max-[920px]:grid-cols-1">
          {values.map((item) => (
            <article key={item.title} className="rounded-lg bg-[#8c3294] px-3 py-4 text-left text-white">
              <span className="text-[19px]">◉</span>
              <h3 className="my-1.5 text-[38px] max-[920px]:text-[34px]">{item.title}</h3>
              <p className="m-0 text-[20px] leading-[1.25] max-[920px]:text-[18px]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-[960px] grid-cols-[0.9fr_1.1fr] items-center gap-6 px-6 pb-[42px] pt-6 max-[920px]:grid-cols-1">
        <div>
          <h2 className="m-0 text-[48px] leading-[1.1] text-[#222a67] max-[920px]:text-[34px]">
            <strong>Por dentro da Xpress:</strong>
            <br />
            onde as ideias ganham forma
          </h2>
          <div className="mb-5 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
        </div>
        <div className="flex min-h-[300px] items-end justify-center rounded-[2px] bg-[linear-gradient(140deg,#a5a8ad,#dbdbd2_40%,#7f8188)] pb-3 text-white">
          <small>• • • •</small>
        </div>
      </section>

      <section className="bg-[#252a63] pt-12 text-white">
        <div className="mx-auto w-full max-w-[960px] px-6 text-center">
          <h2 className="m-0 text-[48px] leading-[1.1] max-[920px]:text-[34px]">Marcas que confiam na Xpress para se comunicar melhor</h2>
          <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />
          <div className="mt-[26px] flex flex-wrap items-center justify-center gap-9 max-[560px]:gap-3">
            {brands.map((brand) => (
              <img
                key={brand.name}
                className="h-auto max-h-11 w-auto max-w-[170px] object-contain max-[560px]:max-h-8 max-[560px]:max-w-[130px]"
                src={brand.src}
                alt={`Logo ${brand.name}`}
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <QuoteFormSection id="orcamento" variant="transparent" />
      </section>

      <MapSection interactive mapEmbedUrl={aboutMapEmbedUrl} mapLinkUrl={aboutMapLinkUrl} />
      <Footer />
    </>
  )
}

export default AboutPage
