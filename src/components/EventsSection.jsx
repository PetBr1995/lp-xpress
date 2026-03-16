function EventsSection({ events }) {
  return (
    <section
      className="mx-auto grid w-full max-w-[960px] grid-cols-[1fr_auto] items-end justify-between gap-5 px-6 pt-11 max-[920px]:grid-cols-1"
      data-reveal="up"
    >
      <div data-reveal="left" data-reveal-delay="60" className="max-[920px]:text-center">
        <h3 className="m-0 text-[20px] font-black leading-[1.1] max-[920px]:text-[22px]">
          Grandes eventos
          <br />
          pedem grandes
          <br />
          produções.
        </h3>
        <p className="mt-3 text-[#50546e]">
          A <strong>Xpress</strong> entrega.
        </p>
      </div>

      <div className="flex items-center gap-3 max-[920px]:justify-center max-[560px]:flex-wrap">
        {events.map((item, index) => (
          <div
            key={item}
            className="text-center text-[12px]"
            data-reveal="zoom"
            data-reveal-delay={index * 70}
          >
            <img
              src={item.image}
              alt="imagem"
              className="w-30 h-30 rounded-full p-2"
            />
            <span>{item.titulo}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsSection;
