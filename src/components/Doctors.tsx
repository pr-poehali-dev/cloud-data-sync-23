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
]

export default function Doctors() {
  return (
    <section className="bg-black border-t border-white/10 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14 text-left">
          <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Врачи</p>
          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight">
            Наша <span className="italic font-medium">команда</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-black p-8 flex flex-col gap-6 hover:bg-white/5 transition-colors duration-300"
            >
              <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center">
                <span className="text-white/70 text-lg font-light">{doctor.initials}</span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-white text-sm font-medium leading-snug">{doctor.name}</h3>
                <p className="text-white/50 text-xs leading-relaxed">{doctor.specialty}</p>
                {doctor.experience && (
                  <p className="text-white/30 text-xs mt-1">{doctor.experience}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
