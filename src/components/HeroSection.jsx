import { useEffect, useState } from 'react'

const HERO_SLIDES = [
  {
    desktop: '/banners/25-[Xpress]Site-BANNERS-1.png',
    mobile: '/banners/25-[Xpress]Site-BANNERS-1-MOBILE.png',
  },
  {
    desktop: '/banners/25-[Xpress]Site-BANNERS-2.png',
    mobile: '/banners/25-[Xpress]-Site-BANNERS-2-MOBILE.png',
  },
  {
    desktop: '/banners/25-[Xpress]Site-BANNERS-3.png',
    mobile: '/banners/25-[Xpress]Site-BANNEROS-3-MOBILE.png',
  },
  {
    desktop: '/banners/25-[Xpress]Site-BANNERS-4.png',
    mobile: '/banners/25-[Xpress]Site-BANNERS-4-MOBILE.png',
  },
]

function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDES.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const goToSlide = (index) => {
    setActiveSlide(index)
  }

  const goToPreviousSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }

  const goToNextSlide = () => {
    setActiveSlide((currentSlide) => (currentSlide + 1) % HERO_SLIDES.length)
  }

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden aspect-[1920/700] max-[768px]:aspect-[1080/700]"
    >
      {HERO_SLIDES.map((slide, index) => (
        <picture
          key={slide.desktop}
          className={`absolute inset-0 transition-opacity duration-700 ${
            activeSlide === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <source media="(max-width: 768px)" srcSet={slide.mobile} />
          <img
            src={slide.desktop}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover object-center"
            loading={index === 0 ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      ))}

      <button
        type="button"
        onClick={goToPreviousSlide}
        aria-label="Voltar banner"
        className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
      >
        &#8249;
      </button>

      <button
        type="button"
        onClick={goToNextSlide}
        aria-label="Próximo banner"
        className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/30 text-white transition hover:bg-black/50"
      >
        &#8250;
      </button>

      <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/25 px-3 py-1.5 backdrop-blur-sm">
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.desktop}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Ir para banner ${index + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              activeSlide === index ? 'w-6 bg-white' : 'w-2.5 bg-white/55 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection
