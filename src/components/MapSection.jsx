function MapSection({ interactive = false, mapEmbedUrl = '', mapLinkUrl = '' }) {
  if (!interactive) {
    return (
      <section className="h-[220px] border-t border-[#d0d4d8] bg-[radial-gradient(circle_at_25%_60%,#7db6cf_1px,transparent_2px),radial-gradient(circle_at_70%_30%,#c4d5e0_1px,transparent_2px),linear-gradient(90deg,#d9dfe4,#ebeff2)] [background-size:40px_40px,30px_30px,cover]" data-reveal="up" />
    )
  }

  return (
    <section className="relative h-[220px] overflow-hidden bg-[#d9dfe4]" data-reveal="up">
      <iframe
        className="block h-full w-full border-0"
        title="Localizacao da Digital Comunicacao"
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={mapLinkUrl}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-3 right-3 rounded-md bg-[rgba(37,42,99,0.92)] px-2.5 py-1.5 text-[12px] text-white no-underline"
      >
        Abrir no Google Maps
      </a>
    </section>
  )
}

export default MapSection
