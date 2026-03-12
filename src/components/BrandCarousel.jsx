function BrandCarousel({ brands }) {
  return (
    <div className="brand-carousel-mask mt-[26px] overflow-hidden">
      <div className="brand-carousel-track flex w-max items-center gap-6">
        <div className="flex shrink-0 items-center gap-6">
          {brands.map((brand) => (
            <img
              key={`brand-a-${brand.name}`}
              className="h-auto max-h-11 w-auto max-w-[170px] object-contain max-[560px]:max-h-8 max-[560px]:max-w-[130px]"
              src={brand.src}
              alt={`Logo ${brand.name}`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-6" aria-hidden="true">
          {brands.map((brand) => (
            <img
              key={`brand-b-${brand.name}`}
              className="h-auto max-h-11 w-auto max-w-[170px] object-contain max-[560px]:max-h-8 max-[560px]:max-w-[130px]"
              src={brand.src}
              alt=""
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BrandCarousel
