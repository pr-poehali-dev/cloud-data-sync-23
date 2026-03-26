import Icon from '@/components/ui/icon'

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-11 p-6">
      <div className="flex justify-between items-center">
        <div className="text-white text-sm uppercase tracking-wide">Зубные Феи</div>
        <nav className="flex items-center gap-8">
          <a
            href="#services"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Услуги
          </a>
          <a
            href="#contacts"
            className="text-white hover:text-neutral-400 transition-colors duration-300 uppercase text-sm"
          >
            Контакты
          </a>
          <a
            href="tel:+79105094063"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-white text-black font-normal text-xs transition-all duration-200 hover:bg-white/90"
          >
            <Icon name="Phone" size={12} />
            +7 (910) 509-40-63
          </a>
        </nav>
      </div>
    </header>
  )
}