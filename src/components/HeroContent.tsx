export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-lg">
      <div className="text-left">
        <div
          className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 backdrop-blur-sm mb-4 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full" />
          <span className="text-white/90 text-xs font-light relative z-10">Частная клиника · Рязань, ул. Маяковского 57</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl md:leading-16 tracking-tight font-light text-white mb-4">
          <span className="font-medium italic">Здоровая</span> улыбка —
          <br />
          <span className="font-light tracking-tight text-white">это просто</span>
        </h1>

        {/* Description */}
        <p className="text-xs font-light text-white/70 mb-4 leading-relaxed">
          Стоматологическая клиника «Зубные Феи» в Рязани. Лечение, протезирование и отбеливание зубов
          в уютной атмосфере. Без боли и страха — только забота о вашей улыбке.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-normal text-xs transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Наши услуги
          </button>
          <a
            href="https://wa.me/79105094063?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%B8%D1%91%D0%BC+%D0%B2+%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D1%83+%C2%AB%D0%97%D1%83%D0%B1%D0%BD%D1%8B%D0%B5+%D0%A4%D0%B5%D0%B8%C2%BB."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 cursor-pointer"
          >
            Записаться
          </a>
        </div>
      </div>
    </main>
  )
}