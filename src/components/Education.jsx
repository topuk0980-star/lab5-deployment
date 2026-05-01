function Education() {
  return (
    <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
      <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
        <span className="h-2 w-2 bg-sky-500 rounded-full"></span>
        Освіта
      </h2>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-semibold text-white">Технічний Університет</h3>
          <p className="text-sky-400">Спеціальність: Кібербезпека</p>
        </div>
        <span className="text-slate-500 text-sm font-mono">2022 - 2026</span>
      </div>
    </section>
  );
}
export default Education;