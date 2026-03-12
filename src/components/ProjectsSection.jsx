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
    <section className="relative mt-14 bg-[linear-gradient(#e5e5e7,#e0e0e3)] py-[60px]" data-reveal="up">
      <div className="absolute -top-[17px] left-1/2 h-[34px] w-[34px] -translate-x-1/2 rotate-45 bg-[#e5e5e7]" />

      <section className="mx-auto w-full max-w-[960px] px-6 text-center">
        <h3 className="m-0 text-[45px] leading-[1.05] max-[920px]:text-[34px]">Nossos projetos</h3>
        <p className="mb-[30px] mt-3 leading-[1.45] text-[#50546e]">Soluções completas em gráfica e comunicação visual</p>

        <div className="mb-6 flex flex-wrap justify-center gap-[18px]">
          {categories.map((category) => {
            const isActive = activeCategory === category.key

            return (
              <button
                key={category.key}
                type="button"
                onClick={() => setActiveCategory(category.key)}
                className={`rounded-[16px] px-[14px] py-2 text-[13px] transition-all duration-200 ${
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

        <div className="grid grid-cols-4 gap-1 max-[920px]:grid-cols-2 max-[920px]:gap-3 max-[560px]:grid-cols-1">
          {activeProjects.map((item, index) => {
            const isActive = activeCardsByCategory[activeCategory] === item

            return (
              <button
                key={item}
                type="button"
                aria-pressed={isActive}
                onClick={() => {
                  setActiveCardsByCategory((prev) => ({ ...prev, [activeCategory]: item }))
                }}
                className={`group relative h-[136px] overflow-hidden rounded-lg px-2.5 text-center text-[18px] uppercase text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_22px_rgba(25,29,52,0.35)] ${isActive ? 'shadow-[0_10px_22px_rgba(134,45,144,0.45)]' : ''}`}
                data-reveal="zoom"
                data-reveal-delay={index * 70}
              >
                <span className="absolute inset-0 bg-[linear-gradient(120deg,#353845,#6d6f77)]" />
                <span
                  className={`absolute inset-0 transition-colors duration-300 ${
                    isActive ? 'bg-[#862d90]/85' : 'bg-[#1f2237]/20 group-hover:bg-[#1f2237]/5'
                  }`}
                />
                <span className="relative z-10 flex h-full items-center justify-center">{item}</span>
              </button>
            )
          })}
        </div>
      </section>
    </section>
  )
}

export default ProjectsSection
