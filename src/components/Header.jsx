function Header() {
  return (
    <header className="relative overflow-hidden bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm0 2.18l6 2.25v4.66c0 3.98-2.58 7.74-6 8.71-3.42-.97-6-4.73-6-8.71V6.43l6-2.25z"/>
        </svg>
      </div>
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="w-24 h-24 bg-sky-500 rounded-2xl rotate-3 flex items-center justify-center shadow-lg shadow-sky-500/20">
          <span className="text-4xl font-bold text-white -rotate-3">V7</span>
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white uppercase">
          Dev_Student [Варіант 7]
        </h1>
        <p className="text-sky-400 font-mono text-sm tracking-[0.2em] uppercase">
          Cybersecurity & AES Encryption Researcher
        </p>
      </div>
    </header>
  );
}
export default Header;