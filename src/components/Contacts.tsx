import Icon from '@/components/ui/icon'

export default function Contacts() {
  return (
    <section id="contacts" className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Контакты</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Запишитесь на <span className="italic font-medium">приём</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          <div className="bg-black p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Icon name="MapPin" size={16} className="text-white/70" />
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest">Адрес</p>
            <p className="text-white text-sm leading-relaxed">Рязань,<br />ул. Маяковского 57</p>
          </div>

          <div className="bg-black p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Icon name="Phone" size={16} className="text-white/70" />
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest">Телефон</p>
            <a
              href="tel:+79105094063"
              className="text-white text-sm hover:text-white/70 transition-colors duration-200"
            >
              +7 (910) 509-40-63
            </a>
          </div>

          <div className="bg-black p-8 flex flex-col gap-4">
            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center">
              <Icon name="Send" size={16} className="text-white/70" />
            </div>
            <p className="text-white/40 text-xs uppercase tracking-widest">Telegram</p>
            <a
              href="https://t.me/+79105094063?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%B8%D1%91%D0%BC+%D0%B2+%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D1%83+%C2%AB%D0%97%D1%83%D0%B1%D0%BD%D1%8B%D0%B5+%D0%A4%D0%B5%D0%B8%C2%BB."
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-sm hover:text-white/70 transition-colors duration-200"
            >
              Написать в Telegram
            </a>
          </div>
        </div>

        <div className="mt-px bg-white/10 overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=39.726474%2C54.629702&z=16&pt=39.726474%2C54.629702~Рязань,+ул.+Маяковского+57&text=Рязань%2C+ул.+Маяковского+57"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
            title="Карта — Зубные Феи"
            className="block w-full grayscale opacity-80"
          />
        </div>

        <div className="mt-px bg-white/10">
          <div className="bg-black p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-white/40 text-xs">© 2026 Зубные Феи. Все права защищены.</p>
            <a
              href="https://t.me/+79105094063?text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5%21+%D0%A5%D0%BE%D1%87%D1%83+%D0%B7%D0%B0%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C%D1%81%D1%8F+%D0%BD%D0%B0+%D0%BF%D1%80%D0%B8%D1%91%D0%BC+%D0%B2+%D0%BA%D0%BB%D0%B8%D0%BD%D0%B8%D0%BA%D1%83+%C2%AB%D0%97%D1%83%D0%B1%D0%BD%D1%8B%D0%B5+%D0%A4%D0%B5%D0%B8%C2%BB."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90 w-fit"
            >
              Записаться на приём
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}