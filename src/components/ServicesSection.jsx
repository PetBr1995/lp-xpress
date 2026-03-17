function ServicesSection({ services }) {
  return (
    <section
      id="servicos"
      className="mx-auto w-full max-w-[1100px] px-6 pt-[58px] pb-24 text-center max-[920px]:pb-14"
      data-reveal="up"
    >
      <h3 className="m-0 text-[45px] leading-[1.05] max-[920px]:text-[34px] max-[560px]:text-[28px]">
        O que fazemos pela sua marca?
      </h3>

      <p className="mt-3 mb-[140px] leading-[1.45] text-[#50546e] max-[920px]:mb-10 max-[560px]:mb-8">
        Serviços com materiais de alta qualidade, que destacam sua marca.
      </p>

      {/* ── DESKTOP: timeline horizontal ── */}
      <div className="relative max-[920px]:hidden">

        {/* Linha central horizontal */}
        <div className="pointer-events-none absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2 bg-[#8c3294]" />

        <div className="relative z-10 grid grid-cols-4 w-full gap-x-4">
          {services.map((service, index) => {
            const isAbove = index % 2 === 0

            const Card = ({ hidden = false }) => (
              <article
                className={`rounded-lg bg-[#8c3294] px-4 py-5 text-left text-white transition-transform duration-300 w-full ${hidden ? 'invisible' : ''}`}
                data-reveal={hidden ? undefined : 'zoom'}
                data-reveal-delay={hidden ? undefined : index * 80}
              >
                <div className="flex items-center gap-3 mb-2">
                  <img src={service.icon} alt="icone" className="w-10" />
                  <h4 className="my-2 text-[20px] font-black leading-[1.1]">{service.title}</h4>
                </div>
                <p className="m-0 text-[14px] leading-[1.32]">{service.text}</p>
              </article>
            )

            return (
              <div key={service.title} className="flex flex-col items-center">

                {/* Slot superior: card real (acima) ou card fantasma (abaixo) */}
                {isAbove ? <Card /> : <Card hidden />}

                {/* Ramificação superior: conecta o card de cima ao ponto */}
                <div className={`w-[2px] flex-1 min-h-[20px] ${isAbove ? 'bg-[#8c3294]' : 'bg-transparent'}`} />

                {/* Ponto central na linha */}
                <div className="timeline-bullet w-4 h-4 rounded-full bg-[#8c3294] border-[3px] border-white outline outline-2 outline-[#8c3294] flex-shrink-0 shadow-[0_0_14px_rgba(140,50,148,0.4)]" />

                {/* Ramificação inferior: conecta o ponto ao card de baixo */}
                <div className={`w-[2px] flex-1 min-h-[20px] ${!isAbove ? 'bg-[#8c3294]' : 'bg-transparent'}`} />

                {/* Slot inferior: card real (abaixo) ou card fantasma (acima) */}
                {!isAbove ? <Card /> : <Card hidden />}

              </div>
            )
          })}
        </div>
      </div>

      {/* ── MOBILE: timeline vertical ── */}
      <div className="relative hidden max-[920px]:flex flex-col items-start pl-8">

        {/* Linha vertical */}
        <div className="pointer-events-none absolute left-[15px] top-0 h-full w-[2px] bg-[#8c3294]" />

        {services.map((service, index) => (
          <div key={service.title} className="relative flex items-start gap-4 w-full mb-8 last:mb-0">

            {/* Ponto na linha */}
            <div className="timeline-bullet absolute -left-[23px] top-5 h-4 w-4 rounded-full bg-[#8c3294] border-[3px] border-white outline outline-2 outline-[#8c3294] flex-shrink-0" />

            <article
              className="w-full rounded-lg bg-[#8c3294] px-4 py-5 text-left text-white"
              data-reveal="zoom"
              data-reveal-delay={index * 80}
            >
              <div>
                <img src={service.icon} alt="icone" className="w-10" />
                <h4 className="my-2 text-[20px] leading-[1.1]">{service.title}</h4>
              </div>
              <p className="m-0 text-[14px] leading-[1.32]">{service.text}</p>
            </article>
          </div>
        ))}
      </div>

      <div className="mt-[90px] max-[920px]:mt-8">
        <button className="rounded-lg bg-[#222a67] px-7 py-3 text-[13px] font-bold text-white">
          Saiba mais
        </button>
      </div>
    </section>
  )
}

export default ServicesSection