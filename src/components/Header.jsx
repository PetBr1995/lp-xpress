function Header({ currentPage = 'home', quoteHref = '/#contato' }) {
  return (
    <header className="topbar">
      <a href="/#home" className="logo">
        <img src="/XPRESS_BRANCA.png" alt="Xpress" className="logo-image" />
      </a>
      <nav>
        <a href="/#home" className={currentPage === 'home' ? 'active' : ''}>HOME</a>
        <a href="/servicos" className={currentPage === 'servicos' ? 'active' : ''}>SERVIÇOS</a>
        <a href="/sobre" className={currentPage === 'sobre' ? 'active' : ''}>SOBRE</a>
      </nav>
      <a href={quoteHref} className="btn-quote">SOLICITAR ORÇAMENTO</a>
    </header>
  )
}

export default Header
