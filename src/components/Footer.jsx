import { FacebookIcon, InstagramIcon, PhoneIcon, YoutubeIcon } from './SocialIcons'

function Footer() {
  return (
    <footer id="contato" className="bg-[#232860] py-10 text-white" data-reveal="up">
      <div className="mx-auto w-full max-w-[960px] px-6">
        <div className="grid gap-8 border-b border-white/20 pb-7 md:grid-cols-[1.2fr_0.8fr_1fr] md:gap-6">
          <div>
            <img src="/logo-xpress-colorfull.png" alt="Xpress" className="mb-3 h-12 w-auto object-contain" />
            <p className="m-0 max-w-[320px] text-[14px] leading-[1.55] text-white/85">
              Soluções em comunicação visual, gráfica rápida e personalizados para fortalecer sua marca.
            </p>
          </div>

          <div>
            <h3 className="mb-3 mt-0 text-[15px] tracking-[0.08em] text-white/70">NAVEGAÇÃO</h3>
            <ul className="m-0 list-none p-0">
              <li className="mb-2">
                <a className="text-[14px] text-white no-underline transition-colors hover:text-[#8f2d91]" href="/#home">
                  HOME
                </a>
              </li>
              <li className="mb-2">
                <a className="text-[14px] text-white no-underline transition-colors hover:text-[#8f2d91]" href="/servicos">
                  SERVIÇOS
                </a>
              </li>
              <li>
                <a className="text-[14px] text-white no-underline transition-colors hover:text-[#8f2d91]" href="/sobre">
                  SOBRE
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 mt-0 text-[15px] tracking-[0.08em] text-white/70">CONTATO</h3>
            <p className="m-0 flex items-center gap-3 text-[14px] text-white">
              <PhoneIcon className="h-5 w-5 text-white" />
              <span className="leading-[1.4]">(92) 3087-4450 | (92) 98388-8682</span>
            </p>

            <div className="mt-3 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:border-white/60 hover:bg-white/20"
              >
                <FacebookIcon className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:border-white/60 hover:bg-white/20"
              >
                <InstagramIcon className="h-5 w-5 text-white" />
              </a>
              <a
                href="#"
                aria-label="YouTube"
                className="inline-flex rounded-full border border-white/20 bg-white/10 p-2 text-white transition-colors hover:border-white/60 hover:bg-white/20"
              >
                <YoutubeIcon className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <p className="mb-0 mt-4 text-[12px] tracking-[0.04em] text-white/65">
          © {new Date().getFullYear()} Gráfica Xpress. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
