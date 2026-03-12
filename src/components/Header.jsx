import { useEffect, useState } from 'react'

function Header({ currentPage = 'home', quoteHref = '/#contato' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navBase = 'text-[13px] tracking-[0.05em] text-[#6b6b7a] transition-colors duration-200 hover:text-[#8f2d91]'
  const active = 'font-bold text-[#8f2d91]'

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 920) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f3f3f3] px-4 md:px-8">
      <div className="flex h-[92px] items-center justify-between">
        <a
          href="/#home"
          onClick={closeMobileMenu}
          className="inline-flex h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(150deg,#0dcfd8,#3554cc_42%,#e93164_70%,#ffb01c)] shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
        >
          <img src="/XPRESS_BRANCA.png" alt="Xpress" className="h-[82%] w-[82%] object-contain" />
        </a>

        <nav className="flex gap-5 max-[920px]:hidden">
          <a href="/#home" className={`${navBase} ${currentPage === 'home' ? active : ''}`}>HOME</a>
          <a href="/servicos" className={`${navBase} ${currentPage === 'servicos' ? active : ''}`}>SERVIÇOS</a>
          <a href="/sobre" className={`${navBase} ${currentPage === 'sobre' ? active : ''}`}>SOBRE</a>
        </nav>

        <a
          href={quoteHref}
          className="inline-block rounded-[20px] bg-[#8f2d91] px-5 py-2.5 text-[12px] font-bold text-white max-[920px]:hidden"
        >
          SOLICITAR ORÇAMENTO
        </a>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="hidden h-10 w-10 items-center justify-center rounded-md border border-[#8f2d91]/40 text-[#8f2d91] max-[920px]:inline-flex"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all duration-300 ${
                isMobileMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div
        aria-hidden={!isMobileMenuOpen}
        className={`hidden overflow-hidden border-t border-[#8f2d91]/20 transition-all duration-300 max-[920px]:block ${
          isMobileMenuOpen
            ? 'max-h-64 translate-y-0 pb-4 pt-3 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-1 py-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col gap-3">
          <a href="/#home" onClick={closeMobileMenu} className={`${navBase} ${currentPage === 'home' ? active : ''}`}>HOME</a>
          <a href="/servicos" onClick={closeMobileMenu} className={`${navBase} ${currentPage === 'servicos' ? active : ''}`}>SERVIÇOS</a>
          <a href="/sobre" onClick={closeMobileMenu} className={`${navBase} ${currentPage === 'sobre' ? active : ''}`}>SOBRE</a>
          <a
            href={quoteHref}
            onClick={closeMobileMenu}
            className="mt-1 inline-block w-fit rounded-[20px] bg-[#8f2d91] px-5 py-2.5 text-[12px] font-bold text-white"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
