function EventsSection({ events }) {
  return (
    <section className="mx-auto grid w-full max-w-[960px] grid-cols-[1fr_auto] items-end justify-between gap-5 px-6 pt-11 max-[920px]:grid-cols-1">
      <div>
        <h3 className="m-0 text-[28px] font-black leading-[1.1] max-[920px]:text-[22px]">
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

      <div className="flex items-center gap-3 max-[560px]:flex-wrap max-[560px]:justify-center">
        {events.map((item) => (
          <div key={item} className="text-center text-[12px]">
            <div className="mb-1.5 h-[102px] w-[102px] rounded-full bg-[linear-gradient(140deg,#294db2,#57aed6,#293266)]" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventsSection
