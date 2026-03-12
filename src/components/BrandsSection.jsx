function BrandsSection({ brands }) {
  return (
    <section className="bg-[#232860] py-14 text-center text-white">
      <div className="mx-auto w-full max-w-[960px] px-6">
        <h3 className="m-0 text-[48px] leading-[1.05] max-[920px]:text-[34px]">Conheça as marcas que confiam na Xpress</h3>
        <div className="mt-[26px] flex flex-wrap items-center justify-center gap-9 max-[560px]:gap-3">
          {brands.map((brand) => (
            <img
              key={brand.name}
              className="h-auto max-h-11 w-auto max-w-[170px] object-contain max-[560px]:max-h-8 max-[560px]:max-w-[130px]"
              src={brand.src}
              alt={`Logo ${brand.name}`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BrandsSection
