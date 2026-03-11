function Footer() {
  return (
    <footer id="contato" className="footer">
      <div className="container footer-grid">
        <div>
          <ul>
            <li><a href="/#home">HOME</a></li>
            <li><a href="/servicos">SERVIÇOS</a></li>
            <li><a href="/sobre">SOBRE</a></li>
          </ul>
          <p className="footer-contact">
            <img src="/icon-telefone.png" alt="Telefone" />
            <span>(92) 3087-4450 | (92) 98388-8682</span>
          </p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <img src="/icon-facebook.png" alt="Facebook" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src="/icon-instagram.png" alt="Instagram" />
            </a>
            <a href="#" aria-label="YouTube">
              <img src="/icon-youtube.png" alt="YouTube" />
            </a>
          </div>
        </div>
        <div>
          <h4>Assine nossa newsletter e fique por dentro de dicas, inspirações e novidades da Xpress</h4>
          <div className="newsletter">
            <input type="text" placeholder="Digite o endereço de e-mail" />
            <button>Assinar</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
