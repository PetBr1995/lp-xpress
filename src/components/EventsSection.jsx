function EventsSection({ events }) {
  return (
    <section className="events container">
      <div>
        <h3>
          Grandes eventos
          <br />
          pedem grandes
          <br />
          produções.
        </h3>
        <p>
          A <strong>Xpress</strong> entrega.
        </p>
      </div>
      <div className="event-list">
        {events.map((item) => (
          <div key={item} className="event-item">
            <div className="event-thumb" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventsSection
