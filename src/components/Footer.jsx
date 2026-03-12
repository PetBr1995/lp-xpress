function Footer() {
  return (
    <footer id="contato" className="bg-[#232860] py-10 text-white" data-reveal="up">
      <div className="mx-auto grid w-full max-w-[960px] grid-cols-[1fr_1.5fr] gap-[30px] px-6 max-[920px]:grid-cols-1">
        <div>
          <ul className="mb-[18px] mt-0 list-none p-0 leading-[1.9]">
            <li><a className="text-white no-underline" href="/#home">HOME</a></li>
            <li><a className="text-white no-underline" href="/servicos">SERVIÇOS</a></li>
            <li><a className="text-white no-underline" href="/sobre">SOBRE</a></li>
          </ul>

          <p className="flex items-center gap-2">
            <img src="/icon-telefone.png" alt="Telefone" className="h-[18px] w-[18px] object-contain" />
            <span className="leading-[1.4]">(92) 3087-4450 | (92) 98388-8682</span>
          </p>

          <div className="mt-2.5 flex gap-2.5">
            <a href="#" aria-label="Facebook" className="inline-flex">
              <img src="/icon-facebook.png" alt="Facebook" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" aria-label="Instagram" className="inline-flex">
              <img src="/icon-instagram.png" alt="Instagram" className="h-5 w-5 object-contain" />
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex">
              <img src="/icon-youtube.png" alt="YouTube" className="h-5 w-5 object-contain" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 mt-0 text-[32px] leading-[1.15]">Assine nossa newsletter e fique por dentro de dicas, inspirações e novidades da Xpress</h4>
          <div className="flex gap-2.5 max-[560px]:flex-col">
            <input
              type="text"
              placeholder="Digite o endereço de e-mail"
              className="flex-1 border border-white bg-[#232860] px-2.5 py-2.5 text-white placeholder:text-white/70 focus:outline-none"
            />
            <button className="border-0 bg-white px-3.5 py-2.5 font-bold text-[#232860]">Assinar</button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
