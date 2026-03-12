import BrandCarousel from './BrandCarousel'

function BrandsSection({ brands }) {
  return (
    <section className="bg-[#232860] py-14 text-center text-white" data-reveal="up">
      <div className="mx-auto w-full max-w-[960px] px-6">
        <h3 className="m-0 text-[48px] leading-[1.05] max-[920px]:text-[34px]">Conheça as marcas que confiam na Xpress</h3>
        <BrandCarousel brands={brands} />
      </div>
    </section>
  )
}

export default BrandsSection
