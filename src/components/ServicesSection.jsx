function ServicesSection({ services }) {
  return (
    <section id="servicos" className="mx-auto w-full max-w-[960px] px-6 pt-[58px] text-center">
      <h3 className="m-0 text-[45px] leading-[1.05] max-[920px]:text-[34px]">O que fazemos pela sua marca?</h3>
      <p className="mb-[30px] mt-3 leading-[1.45] text-[#50546e]">
        Serviços com materiais de alta qualidade, que destacam sua marca.
      </p>

      <div className="grid grid-cols-4 gap-2 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1">
        {services.map((service) => (
          <article key={service.title} className="min-h-[244px] rounded-lg bg-[#8c3294] px-4 py-5 text-left text-white">
            <span className="text-[19px]">{service.icon}</span>
            <h4 className="my-2 text-[23px] leading-[1.1]">{service.title}</h4>
            <p className="m-0 text-[14px] leading-[1.32]">{service.text}</p>
          </article>
        ))}
      </div>

      <button className="mt-[18px] rounded-md bg-[#222a67] px-5 py-2 text-[12px] text-white">Saiba mais</button>
    </section>
  )
}

export default ServicesSection
