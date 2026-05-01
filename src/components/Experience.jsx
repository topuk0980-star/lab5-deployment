function Experience() {
  const skills = ["AES-256", "Python", "React", "Tailwind", "Wireshark"];

  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="h-2 w-2 bg-sky-500 rounded-full"></span>
        Досвід та Проєкти
      </h2>
      <div className="space-y-6">
        <div className="group relative pl-6 border-l-2 border-slate-800 hover:border-sky-500 transition-colors">
          <h3 className="text-lg font-semibold text-sky-400">Система автентифікації (AES)</h3>
          <p className="text-slate-400 text-sm mb-3">Курсовий проєкт • 2026</p>
          <p className="text-slate-300 leading-relaxed mb-4">
            Розробка програмного забезпечення для безпечного зберігання паролів. 
            Використання симетричного шифрування AES для захисту конфіденційних даних.
          </p>
          <div className="flex flex-wrap gap-2">
            {skills.map(skill => (
              <span key={skill} className="px-3 py-1 bg-slate-800 text-slate-400 text-xs rounded-full border border-slate-700">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Experience;