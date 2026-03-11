function ServicesSection({ services }) {
  return (
    <section id="servicos" className="services container">
      <h3>O que fazemos pela sua marca?</h3>
      <p>Serviços com materiais de alta qualidade, que destacam sua marca.</p>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <span>{service.icon}</span>
            <h4>{service.title}</h4>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
      <button className="btn-dark">Saiba mais</button>
    </section>
  )
}

export default ServicesSection
