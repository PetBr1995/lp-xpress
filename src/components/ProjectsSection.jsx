import { useMemo, useState } from 'react'

const categories = [
  { key: 'graficaRapida', label: 'GRÁFICA RÁPIDA' },
  { key: 'comunicacaoVisual', label: 'COMUNICAÇÃO VISUAL' },
  { key: 'malharia', label: 'MALHARIA' },
  { key: 'festas', label: 'FESTAS' },
  { key: 'personalizados', label: 'PERSONALIZADOS' },
]

function ProjectsSection({ projects }) {
  const [activeCategory, setActiveCategory] = useState('personalizados')
  const [activeCardsByCategory, setActiveCardsByCategory] = useState({})
  const projectsByCategory = useMemo(() => {
    if (Array.isArray(projects)) {
      return { personalizados: projects }
    }

    return projects
  }, [projects])

  const activeProjects = projectsByCategory?.[activeCategory] ?? []

  return (
    <section className="relative mt-14 bg-[linear-gradient(#e5e5e7,#e0e0e3)] py-[60px] max-[920px]:mt-10 max-[920px]:py-12" data-reveal="up">
      <div className="absolute -top-[17px] left-1/2 h-[34px] w-[34px] -translate-x-1/2 rotate-45 bg-[#e5e5e7]" />

      <section className="mx-auto w-full max-w-[960px] px-6 text-center">
        <h3 className="m-0 text-[45px] leading-[1.05] max-[920px]:text-[30px]">Nossos projetos</h3>
        <p className="mb-[30px] mt-3 text-[16px] leading-[1.5] text-[#50546e] max-[920px]:mb-7">Soluções completas em gráfica e comunicação visual</p>

        <div className="mb-6 flex flex-wrap justify-center gap-[18px] max-[920px]:gap-2.5">
          {categories.map((category) => {
            const isActive = activeCategory === category.key

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-[16px] px-[14px] py-2 text-[13px] transition-all duration-200 max-[920px]:px-3 max-[920px]:py-1.5 max-[920px]:text-[12px] ${
                  isActive
                    ? 'bg-[#862d90] text-white shadow-[0_6px_18px_rgba(134,45,144,0.35)]'
                    : 'bg-transparent text-[#903b9c] hover:bg-[#903b9c]/10'
                }`}
              >
                {category.label}
              </button>
            )
          })}
        </div>

        <div className="grid grid-cols-4 gap-1 max-[920px]:grid-cols-2 max-[920px]:gap-2.5 max-[560px]:grid-cols-1">
          {activeProjects.map((project, index) => {
            const isActive = activeCardsByCategory[activeCategory] === project
            const imageUrl = project.image || '/img-home-xpress.png'
            const backgroundImageUrl = encodeURI(imageUrl)
            const buttonStyle = {
              backgroundImage: `linear-gradient(180deg, rgba(8, 14, 35, 0.85), rgba(8, 14, 35, 0.45)), url('${backgroundImageUrl}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }

            return (
              <button
                key={project.label}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setActiveCardsByCategory((prev) => ({ ...prev, [activeCategory]: project }))
                }}
                className={`group relative h-[136px] overflow-hidden rounded-lg px-2.5 text-center text-[18px] uppercase text-white transition-all duration-500 ease-out hover:-translate-y-0.5 hover:shadow-[0_6px_14px_rgba(25,29,52,0.22)] max-[920px]:h-[126px] max-[920px]:text-[16px] ${isActive ? 'shadow-[0_8px_18px_rgba(134,45,144,0.32)]' : ''}`}
                style={buttonStyle}
                data-reveal="zoom"
                data-reveal-delay={index * 70}
              >
                <span
                  className={`absolute inset-0 transition-colors duration-300 ${
                    isActive ? 'bg-[#862d90]/85' : 'bg-[#1f2237]/20 group-hover:bg-[#1f2237]/5'
                  }`}
                />
                <span className="relative z-10 flex h-full items-center justify-center">{project.label}</span>
              </button>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default ProjectsSection
