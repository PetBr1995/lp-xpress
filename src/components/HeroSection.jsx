function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-[430px] overflow-hidden bg-[url('/banner-home-xpress.png')] bg-cover bg-top bg-no-repeat max-[920px]:h-[390px]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(15,18,55,0.92)_0_43%,rgba(15,18,55,0.18)_72%),radial-gradient(circle_at_20%_15%,rgba(145,61,161,0.28),transparent_30%)]" />
      <div className="absolute bottom-0 left-0 h-2 w-[36%] bg-[#8f2d91]" />
      <div className="absolute bottom-0 left-[36%] h-2 w-[64%] bg-[linear-gradient(90deg,#f2b620,#a2c718,#22b66e)]" />

      <div className="relative z-10 mx-auto w-full max-w-[960px] px-6 pt-16 text-white max-[560px]:pt-11">
        <h1 className="m-0 text-[50px] leading-[1.08] max-[920px]:text-[34px]">
          Visite a <span className="font-black">Xpress</span>
          <br />
          e conheça nossa
          <br />
          unidade!
        </h1>
        <div className="my-7 h-0.5 w-[66px] bg-white" />
        <p className="m-0 text-[34px] leading-[1.14] max-[920px]:text-[24px]">
          Estrutura completa,
          <br />
          <strong>profissionalismo</strong> e
          <br />
          <strong>credibilidade.</strong>
        </p>
      </div>
    </section>
  )
}

export default HeroSection
