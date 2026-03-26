const doctors = [
  {
    name: 'Увыхмина Наталья Алексеевна',
    specialty: 'Врач стоматолог-терапевт',
    experience: 'Стаж более 35 лет',
    initials: 'НА',
  },
  {
    name: 'Старцева Александра Васильевна',
    specialty: 'Врач стоматолог-терапевт, ортодонт, детский стоматолог',
    experience: '',
    initials: 'АВ',
  },
  {
    name: 'Крецу Ион Иванович',
    specialty: 'Врач стоматолог-ортопед',
    experience: '',
    initials: 'ИИ',
  },
  {
    name: 'Демин Ефим Степанович',
    specialty: 'Врач стоматолог-хирург, имплантолог',
    experience: '',
    initials: 'ЕС',
  },
]

export default function Doctors() {
  return (
    <section className="py-24 px-6 bg-[hsl(var(--clr-section))] border-t border-[hsl(var(--clr-border))]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-[hsl(var(--clr-text-muted))] text-xs uppercase tracking-widest mb-3">Врачи</p>
          <h2 className="text-4xl md:text-5xl font-light text-[hsl(var(--clr-text))] tracking-tight">
            Наша <span className="italic font-medium text-[hsl(var(--clr-accent))]">команда</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(var(--clr-border))]">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-[hsl(var(--clr-card))] p-8 flex flex-col gap-6 hover:bg-[hsl(210_40%_95%)] transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-[hsl(var(--clr-border))] flex items-center justify-center bg-[hsl(var(--clr-section))]">
                <span className="text-[hsl(var(--clr-accent))] text-lg font-light">{doctor.initials}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[hsl(var(--clr-text))] text-sm font-medium leading-snug">{doctor.name}</h3>
                <p className="text-[hsl(var(--clr-text-muted))] text-xs leading-relaxed">{doctor.specialty}</p>
                {doctor.experience && (
                  <p className="text-[hsl(var(--clr-accent))] text-xs mt-1">{doctor.experience}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}