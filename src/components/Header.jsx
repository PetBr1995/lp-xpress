import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

function Header({ currentPage = 'home', quoteHref = '/#contato' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navBase = 'text-[15px] tracking-[0.05em] text-[#6b6b7a] transition-colors duration-200 hover:text-[#8f2d91] max-[920px]:text-[14px]'
  const active = 'font-bold text-[#8f2d91]'
  const quoteBtnClassName = 'relative inline-flex items-center justify-center overflow-hidden rounded-md px-5 py-2.5 text-[12px] font-bold text-white max-[920px]:px-4 max-[920px]:py-2 max-[920px]:text-[11px]'
  const quoteBtnStyle = {
    background: 'linear-gradient(90deg, #128c4a 0%, #25d366 100%)',
  }

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
    <header className="fixed inset-x-0 top-0 z-50 bg-[#f3f3f3] px-4 md:px-8 max-[920px]:px-3">
      <div className="flex h-[92px] items-center justify-between max-[920px]:h-[78px]">
        <a
          href="/#home"
          onClick={closeMobileMenu}
          className="inline-flex h-[70px] w-[70px] items-center justify-center max-[920px]:h-[58px] max-[920px]:w-[58px]"
        >
          <img src="/logo-xpress-colorfull.png" alt="Xpress" className="h-full w-full object-contain" />
        </a>

        <nav className="flex gap-5 max-[920px]:hidden">
          <a href="/#home" className={`${navBase} ${currentPage === 'home' ? active : ''}`}>HOME</a>
          <a href="/servicos" className={`${navBase} ${currentPage === 'servicos' ? active : ''}`}>SERVIÇOS</a>
          <a href="/sobre" className={`${navBase} ${currentPage === 'sobre' ? active : ''}`}>SOBRE</a>
        </nav>

        <motion.a
          href={quoteHref}
          className={`${quoteBtnClassName} shadow-[0_8px_22px_rgba(18,140,74,0.35)] max-[920px]:hidden`}
          style={quoteBtnStyle}
          initial={{ opacity: 0, y: 6, scale: 0.97 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.045, 1],
            boxShadow: [
              '0 8px 22px rgba(18,140,74,0.35)',
              '0 12px 30px rgba(37,211,102,0.45)',
              '0 8px 22px rgba(18,140,74,0.35)',
            ],
          }}
          transition={{
            opacity: { duration: 0.35 },
            y: { duration: 0.35 },
            scale: { duration: 1.7, repeat: Infinity, ease: 'easeInOut' },
            boxShadow: { duration: 1.7, repeat: Infinity, ease: 'easeInOut' },
          }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.98 }}
        >
          <motion.span
            className="absolute inset-y-0 -left-1/2 w-1/3 bg-white/20"
            style={{ transform: 'skewX(-25deg)' }}
            animate={{ left: ['-50%', '120%'] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              repeatDelay: 2.8,
              ease: 'easeInOut',
            }}
          />
          <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
        </motion.a>

        <button
          type="button"
          aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMobileMenuOpen}
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          className="hidden h-11 w-11 items-center justify-center rounded-md border border-[#8f2d91]/40 text-[#8f2d91] max-[920px]:inline-flex"
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
            ? 'max-h-64 translate-y-0 pb-5 pt-4 opacity-100'
            : 'pointer-events-none max-h-0 -translate-y-1 py-0 opacity-0'
        } max-[920px]:px-2`}
      >
        <nav className="flex flex-col gap-3">
          <a href="/#home" onClick={closeMobileMenu} className={`${navBase} ${currentPage === 'home' ? active : ''}`}>HOME</a>
          <a href="/servicos" onClick={closeMobileMenu} className={`${navBase} ${currentPage === 'servicos' ? active : ''}`}>SERVIÇOS</a>
          <a href="/sobre" onClick={closeMobileMenu} className={`${navBase} ${currentPage === 'sobre' ? active : ''}`}>SOBRE</a>
          <motion.a
            href={quoteHref}
            onClick={closeMobileMenu}
            className={`${quoteBtnClassName} mt-1 w-fit shadow-[0_8px_22px_rgba(18,140,74,0.35)]`}
            style={quoteBtnStyle}
            animate={{
              scale: [1, 1.04, 1],
              boxShadow: [
                '0 8px 22px rgba(18,140,74,0.35)',
                '0 12px 30px rgba(37,211,102,0.45)',
                '0 8px 22px rgba(18,140,74,0.35)',
              ],
            }}
            transition={{
              scale: { duration: 1.7, repeat: Infinity, ease: 'easeInOut' },
              boxShadow: { duration: 1.7, repeat: Infinity, ease: 'easeInOut' },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.span
              className="absolute inset-y-0 -left-1/2 w-1/3 bg-white/20"
              style={{ transform: 'skewX(-25deg)' }}
              animate={{ left: ['-50%', '120%'] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                repeatDelay: 2.8,
                ease: 'easeInOut',
              }}
            />
            <span className="relative z-10">SOLICITAR ORÇAMENTO</span>
          </motion.a>
        </nav>
      </div>
    </header>
  )
}

export default Header
