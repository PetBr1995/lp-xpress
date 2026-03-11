function ProjectsSection({ projects }) {
  return (
    <section className="projects-wrap">
      <section className="projects container">
        <h3>Nossos projetos</h3>
        <p>Soluções completas em gráfica e comunicação visual</p>
        <div className="project-tabs">
          <button>GRÁFICA RÁPIDA</button>
          <button>COMUNICAÇÃO VISUAL</button>
          <button>MALHARIA</button>
          <button>FESTAS</button>
          <button className="active">PERSONALIZADOS</button>
        </div>
        <div className="project-grid">
          {projects.map((item, index) => (
            <article key={item} className={`project-card ${index === 4 ? 'highlight' : ''}`}>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default ProjectsSection
