function QuoteFormSection({ id = 'orcamento', className = 'services-quote', title }) {
  return (
    <section id={id} className={className}>
      <div className="container quote-content">
        <h2>
          {title || (
            <>
              Solicite um orçamento e retornaremos
              <br />
              com a melhor solução
            </>
          )}
        </h2>
        <div className="service-line center" />

        <form className="quote-form">
          <label>
            Nome*
            <input type="text" />
          </label>
          <label>
            E-mail*
            <input type="email" />
          </label>
          <label>
            Contato (WhatsApp)*
            <input type="text" defaultValue="+55" />
          </label>
          <label>
            Selecione a categoria*
            <select defaultValue="">
              <option value="" disabled>Selecione</option>
              <option>Comunicação Visual</option>
              <option>Confecção</option>
              <option>Gráfica Xpress</option>
              <option>Brindes Personalizados</option>
              <option>Decoração de Eventos</option>
            </select>
          </label>
          <label className="full">
            Descreva seu pedido aqui*
            <textarea rows="2" />
          </label>
          <button type="submit" className="send-btn">Enviar</button>
        </form>
      </div>
    </section>
  )
}

export default QuoteFormSection
