import Icon from '@/components/ui/icon'

const reasons = [
  {
    icon: 'ShieldCheck',
    title: 'Без боли',
    description: 'Используем современные анестетики — лечение проходит комфортно даже для самых чувствительных пациентов.',
  },
  {
    icon: 'Clock',
    title: 'Принимаем в день обращения',
    description: 'Острая боль не ждёт. Постараемся принять вас в день звонка без долгого ожидания.',
  },
  {
    icon: 'Award',
    title: 'Опытные врачи',
    description: 'Наши специалисты проходят регулярное обучение и используют передовые методики лечения.',
  },
  {
    icon: 'Heart',
    title: 'Забота о каждом',
    description: 'Индивидуальный подход к каждому пациенту — от ребёнка до взрослого. Никакого страха и спешки.',
  },
  {
    icon: 'Microscope',
    title: 'Современное оборудование',
    description: 'Работаем на профессиональном оборудовании европейских брендов для точной диагностики и лечения.',
  },
  {
    icon: 'BadgePercent',
    title: 'Честные цены',
    description: 'Прозрачный прейскурант без скрытых доплат. Всегда согласовываем стоимость до начала лечения.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 px-6 bg-[hsl(var(--clr-section))] border-t border-[hsl(var(--clr-border))]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-[hsl(var(--clr-text-muted))] text-xs uppercase tracking-widest mb-3">Почему мы</p>
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--clr-text))] tracking-tight">
            Клиника, которой <span className="italic font-medium text-[hsl(var(--clr-accent))]">доверяют</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--clr-border))]">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-[hsl(var(--clr-card))] p-8 flex flex-col gap-4 hover:bg-[hsl(210_40%_95%)] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-[hsl(var(--clr-border))] flex items-center justify-center">
                <Icon name={reason.icon} size={16} className="text-[hsl(var(--clr-accent))]" />
              </div>
              <h3 className="text-[hsl(var(--clr-text))] text-sm font-medium">{reason.title}</h3>
              <p className="text-[hsl(var(--clr-text-muted))] text-xs leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}