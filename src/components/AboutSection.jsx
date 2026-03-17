function AboutSection() {
  return (
    <section
      id="sobre"
      className="mx-auto grid w-full max-w-[960px] grid-cols-[1.1fr_1fr] gap-7 px-6 pt-[52px] max-[920px]:grid-cols-1"
      data-reveal="up"
    >
      <div data-reveal="left" data-reveal-delay="80">
        <h1 className="m-0 text-[30px] font-black mb-2">
          imprimindo projetos
          <br />
          e ideias com excelência
        </h1>
        <p className="mt-4 leading-[1.45] text-[#50546e]">
          Desde 2010, imprimindo projetos e ideias com excelência.{' '}
          A <strong>Gráfica Xpress</strong> nasceu com o propósito de oferecer soluções em comunicação visual e
          gráfica rápida para os mais diversos segmentos. Contamos com tecnologia avançada para impressão,
          corte de materiais rígidos, bordados e muito mais, sempre focados em entregar produtos e serviços
          de alta qualidade.
        </p>
      </div>
      <div className="min-h-[270px] overflow-hidden rounded-[2px]" data-reveal="right" data-reveal-delay="140">
        <img
          src="/img-home-xpress.png"
          alt="Equipe Xpress em produção gráfica"
          className="block h-full min-h-[270px] w-full object-cover object-center"
        />
      </div>
    </section>
  )
}

export default AboutSection
