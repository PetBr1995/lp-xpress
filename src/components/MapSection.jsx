function MapSection({ interactive = false, mapEmbedUrl = '', mapLinkUrl = '' }) {
  if (!interactive) {
    return <section className="map" />
  }

  return (
    <section className="map map-embed">
      <iframe
        title="Localizacao da Digital Comunicacao"
        src={mapEmbedUrl}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a href={mapLinkUrl} target="_blank" rel="noreferrer" className="map-open-link">
        Abrir no Google Maps
      </a>
    </section>
  )
}

export default MapSection
