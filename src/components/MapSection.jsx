function MapSection({ interactive = false, mapEmbedUrl = '', mapLinkUrl = '', locations = [] }) {
  if (!interactive) {
    return (
      <section className="h-[220px] border-t border-[#d0d4d8] bg-[radial-gradient(circle_at_25%_60%,#7db6cf_1px,transparent_2px),radial-gradient(circle_at_70%_30%,#c4d5e0_1px,transparent_2px),linear-gradient(90deg,#d9dfe4,#ebeff2)] [background-size:40px_40px,30px_30px,cover]" data-reveal="up" />
    )
  }

  const normalizedLocations = locations.length
    ? locations
    : [
      {
        title: 'Unidade 1',
        mapEmbedUrl,
        mapLinkUrl,
      },
    ]

  return (
    <section className="border-t border-[#d0d4d8] bg-[radial-gradient(circle_at_25%_60%,#7db6cf_1px,transparent_2px),radial-gradient(circle_at_70%_30%,#c4d5e0_1px,transparent_2px),linear-gradient(90deg,#d9dfe4,#ebeff2)] px-6 py-8 [background-size:40px_40px,30px_30px,cover] max-[920px]:px-4 max-[920px]:py-7" data-reveal="up">
      <div className="mx-auto w-full max-w-[960px]">
        <div className="mb-5 flex items-center justify-between gap-4 max-[680px]:mb-4 max-[680px]:flex-col max-[680px]:items-start">
          <h2 className="m-0 text-[38px] leading-[1.05] text-[#232860] max-[920px]:text-[26px]">Nossas unidades</h2>
          <span className="rounded-full bg-[#232860] px-3 py-1 text-[12px] tracking-[0.05em] text-white max-[920px]:text-[11px]">ATENDIMENTO PRESENCIAL</span>
        </div>

        <div className="grid grid-cols-2 gap-4 max-[920px]:grid-cols-1 max-[920px]:gap-3">
          {normalizedLocations.map((location, index) => (
            <article
              key={location.title || `unidade-${index + 1}`}
              className="overflow-hidden rounded-lg border border-[#d4d8dc] bg-white shadow-[0_8px_30px_rgba(18,25,53,0.08)]"
              data-reveal="up"
              data-reveal-delay={index * 70}
            >
              <header className="flex items-center justify-between border-b border-[#e8eaed] bg-white/95 px-4 py-3 max-[920px]:px-3 max-[920px]:py-2.5">
                <div>
                  <h3 className="m-0 text-[20px] text-[#232860] max-[920px]:text-[18px]">{location.title || `Unidade ${index + 1}`}</h3>
                  {location.description ? (
                    <p className="mt-0.5 text-[12px] text-[#5b6179]">{location.description}</p>
                  ) : null}
                </div>
                <span className="h-2.5 w-2.5 rounded-full bg-[#b046ac]" />
              </header>

              {location.mapEmbedUrl ? (
                <div className="relative h-[240px] max-[920px]:h-[220px]">
                  <iframe
                    className="block h-full w-full border-0"
                    title={`Localizacao da ${location.title || `Unidade ${index + 1}`}`}
                    src={location.mapEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  {location.mapLinkUrl ? (
                    <a
                      href={location.mapLinkUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="absolute bottom-3 right-3 rounded-md bg-[rgba(37,42,99,0.92)] px-2.5 py-1.5 text-[12px] text-white no-underline max-[920px]:bottom-2 max-[920px]:right-2 max-[920px]:text-[11px]"
                    >
                      Abrir no Google Maps
                    </a>
                  ) : null}
                </div>
              ) : (
                <div className="grid h-[240px] place-items-center bg-[linear-gradient(145deg,#dde3e8,#f3f5f7)] px-5 text-center text-[#48506e]">
                  <p className="m-0 text-[15px] leading-[1.45]">Mapa da unidade em atualização.</p>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MapSection
