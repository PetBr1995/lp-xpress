function QuoteFormSection({ id = 'orcamento', variant = 'dark', title }) {
  const transparent = variant === 'transparent'

  return (
    <section id={id} className={`relative py-[44px] text-white ${transparent ? 'bg-transparent' : 'bg-[#252a63] pt-[60px]'}`} data-reveal="up">
      {!transparent && (
        <div className="absolute -top-[17px] left-1/2 h-[34px] w-[34px] -translate-x-1/2 rotate-45 bg-[#252a63]" />
      )}

      <div className="mx-auto w-full max-w-[860px] px-6 text-center">
        <h2 className="m-0 text-[52px] leading-[1.1] max-[920px]:text-[34px]">
          {title || (
            <>
              Solicite um orçamento e retornaremos
              <br />
              com a melhor solução
            </>
          )}
        </h2>

        <div className="mx-auto mb-6 mt-4 h-0.5 w-[70px] bg-[#b046ac]" />

        <form className="mt-1 grid grid-cols-2 gap-2 text-left max-[920px]:grid-cols-1">
          <label className="flex flex-col gap-[3px] text-[13px]">
            Nome*
            <input type="text" className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white" />
          </label>
          <label className="flex flex-col gap-[3px] text-[13px]">
            E-mail*
            <input type="email" className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white" />
          </label>
          <label className="flex flex-col gap-[3px] text-[13px]">
            Contato (WhatsApp)*
            <input type="text" defaultValue="+55" className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white" />
          </label>
          <label className="flex flex-col gap-[3px] text-[13px]">
            Selecione a categoria*
            <select defaultValue="" className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white">
              <option value="" disabled className="text-[#222]">Selecione</option>
              <option className="text-[#222]">Comunicação Visual</option>
              <option className="text-[#222]">Confecção</option>
              <option className="text-[#222]">Gráfica Xpress</option>
              <option className="text-[#222]">Brindes Personalizados</option>
              <option className="text-[#222]">Decoração de Eventos</option>
            </select>
          </label>
          <label className="col-span-2 flex flex-col gap-[3px] text-[13px] max-[920px]:col-span-1">
            Descreva seu pedido aqui*
            <textarea rows="2" className="border border-white/70 bg-transparent px-2 py-1.5 text-[15px] text-white" />
          </label>
          <button
            type="submit"
            className="col-span-2 mx-auto mt-2 rounded-[18px] bg-[#f2f2f2] px-[26px] py-2 text-[16px] font-bold text-[#222a67] max-[920px]:col-span-1"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default QuoteFormSection
