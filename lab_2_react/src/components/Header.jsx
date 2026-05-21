function Header({ isDark }) {
  return (
    <header className="mb-14 group">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-pink-500 mb-3 origin-left transition-transform duration-300 group-hover:scale-[1.02]">
        Stepan Bavus
      </h1>
      <p className={`text-2xl font-semibold mb-8 tracking-wide ${
        isDark ? "text-cyan-400" : "text-indigo-600"
      }`}>
        Cybersecurity Student
      </p>
      <div className={`inline-flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl border shadow-inner font-medium ${
        isDark
          ? "bg-slate-700 border-slate-600 text-slate-200"
          : "bg-indigo-50 border-indigo-100 text-slate-700"
      }`}>
        <p className="hover:text-pink-500 transition-colors cursor-default">
          Phone: +38 (096) 67-12-117
        </p>
        <span className="hidden md:block w-1.5 h-1.5 bg-pink-400 rounded-full"></span>
        <p className="hover:text-pink-500 transition-colors cursor-default">
          Email: bavusstep@gmail.com
        </p>
      </div>
    </header>
  )
}
export default Header
