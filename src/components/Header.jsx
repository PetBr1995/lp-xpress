function Header({ currentPage = 'home', quoteHref = '/#contato' }) {
  const navBase = 'text-[13px] tracking-[0.05em] text-[#6b6b7a] transition-colors duration-200 hover:text-[#8f2d91]'
  const active = 'font-bold text-[#8f2d91]'

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex h-[92px] items-center justify-between bg-[#f3f3f3] px-4 md:px-8 max-[920px]:h-auto max-[920px]:flex-wrap max-[920px]:gap-3 max-[920px]:py-3">
      <a
        href="/#home"
        className="inline-flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(150deg,#0dcfd8,#3554cc_42%,#e93164_70%,#ffb01c)] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
      >
        <img src="/XPRESS_BRANCA.png" alt="Xpress" className="h-[82%] w-[82%] object-contain" />
      </a>

      <nav className="flex gap-5 max-[560px]:w-full max-[560px]:justify-center">
        <a href="/#home" className={`${navBase} ${currentPage === 'home' ? active : ''}`}>HOME</a>
        <a href="/servicos" className={`${navBase} ${currentPage === 'servicos' ? active : ''}`}>SERVIÇOS</a>
        <a href="/sobre" className={`${navBase} ${currentPage === 'sobre' ? active : ''}`}>SOBRE</a>
      </nav>

      <a
        href={quoteHref}
        className="inline-block rounded-[20px] bg-[#8f2d91] px-5 py-2.5 text-[12px] font-bold text-white"
      >
        SOLICITAR ORÇAMENTO
      </a>
    </header>
  )
}

export default Header
