import Icon from '@/components/ui/icon'

const services = [
  {
    icon: 'Stethoscope',
    title: 'Лечение любой сложности',
    description: 'Лечим кариес, пульпит и другие заболевания зубов — быстро, безболезненно и качественно.',
  },
  {
    icon: 'Crown',
    title: 'Протезирование',
    description: 'Восстанавливаем зубы коронками, мостами и съёмными протезами из современных материалов.',
  },
  {
    icon: 'Zap',
    title: 'Имплантация',
    description: 'Устанавливаем импланты мировых брендов — надёжное решение на долгие годы.',
  },
  {
    icon: 'Smile',
    title: 'Ортодонтия',
    description: 'Исправляем прикус и выравниваем зубы с помощью брекетов и элайнеров.',
  },
  {
    icon: 'Baby',
    title: 'Детская стоматология',
    description: 'Лечим детей в дружелюбной атмосфере — без страха и слёз.',
  },
  {
    icon: 'Sparkles',
    title: 'Профессиональная гигиена',
    description: 'Профессиональная чистка, удаление зубного камня и отбеливание зубов.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[hsl(var(--clr-bg))]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-[hsl(var(--clr-text-muted))] text-xs uppercase tracking-widest mb-3">Услуги</p>
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--clr-text))] tracking-tight">
            Всё для вашей <span className="italic font-medium text-[hsl(var(--clr-accent))]">улыбки</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--clr-border))]">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-[hsl(var(--clr-card))] p-8 flex flex-col gap-4 hover:bg-[hsl(210_40%_95%)] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-[hsl(var(--clr-border))] flex items-center justify-center">
                <Icon name={service.icon} size={16} className="text-[hsl(var(--clr-accent))]" />
              </div>
              <h3 className="text-[hsl(var(--clr-text))] text-sm font-medium">{service.title}</h3>
              <p className="text-[hsl(var(--clr-text-muted))] text-xs leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}