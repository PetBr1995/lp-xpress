function BrandsSection({ brands }) {
  return (
    <section className="brands">
      <div className="container">
        <h3>Conheça as marcas que confiam na Xpress</h3>
        <div className="brand-row">
          {brands.map((brand) => (
            <img
              key={brand.name}
              className="brand-logo"
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
