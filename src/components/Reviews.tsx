const reviews = [
  {
    name: 'Анна К.',
    text: 'Наконец-то нашла клинику, где лечат без боли! Врачи очень внимательные, атмосфера спокойная. Теперь хожу сюда всей семьёй.',
    rating: 5,
  },
  {
    name: 'Дмитрий С.',
    text: 'Делал имплантацию — всё прошло отлично. Подробно объяснили каждый этап, никакого дискомфорта. Результатом очень доволен.',
    rating: 5,
  },
  {
    name: 'Елена В.',
    text: 'Привожу дочку сюда с 5 лет. Детский врач просто волшебник — ребёнок идёт на приём без слёз и страха. Спасибо огромное!',
    rating: 5,
  },
  {
    name: 'Михаил Р.',
    text: 'Поставили брекеты, результат виден уже через несколько месяцев. Персонал всегда на связи, отвечают на все вопросы.',
    rating: 5,
  },
  {
    name: 'Ольга Т.',
    text: 'Сделала профессиональную чистку и отбеливание — зубы стали заметно белее. Быстро, аккуратно, без дискомфорта.',
    rating: 5,
  },
  {
    name: 'Сергей Н.',
    text: 'Обращался с острой болью, приняли в тот же день. Вылечили быстро и качественно. Однозначно рекомендую!',
    rating: 5,
  },
]

export default function Reviews() {
  return (
    <section className="py-24 px-6 bg-[hsl(var(--clr-bg))] border-t border-[hsl(var(--clr-border))]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-[hsl(var(--clr-text-muted))] text-xs uppercase tracking-widest mb-3">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--clr-text))] tracking-tight">
            Нам <span className="italic font-medium text-[hsl(var(--clr-accent))]">доверяют</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--clr-border))]">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-[hsl(var(--clr-card))] p-8 flex flex-col gap-4 hover:bg-[hsl(210_40%_95%)] transition-colors duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-[hsl(var(--clr-accent))] text-xs">★</span>
                ))}
              </div>
              <p className="text-[hsl(var(--clr-text-muted))] text-xs leading-relaxed flex-1">«{review.text}»</p>
              <p className="text-[hsl(var(--clr-text-muted))] text-xs uppercase tracking-widest">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}