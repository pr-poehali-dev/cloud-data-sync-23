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
    <section className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Отзывы</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Нам <span className="italic font-medium">доверяют</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-black p-8 flex flex-col gap-4 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i} className="text-white/70 text-xs">★</span>
                ))}
              </div>
              <p className="text-white/70 text-xs leading-relaxed flex-1">«{review.text}»</p>
              <p className="text-white/40 text-xs uppercase tracking-widest">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
