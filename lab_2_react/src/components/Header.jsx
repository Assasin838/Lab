function Header() {
  return (
    <header className="mb-14 group">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-cyan-600 mb-3 origin-left transition-transform duration-300 group-hover:scale-[1.02]">
        Stepan Bavus
      </h1>
      <p className="text-2xl text-slate-600 font-semibold mb-8 tracking-wide">
        Cybersecurity Student
      </p>

      <div className="inline-flex flex-col md:flex-row md:items-center gap-2 md:gap-6 bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-inner text-slate-700 font-medium">
        <p className="hover:text-indigo-600 transition-colors cursor-default">Phone: +38 (096) 67-12-117</p>
        <span className="hidden md:block w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
        <p className="hover:text-indigo-600 transition-colors cursor-default">Email: bavusstep@gmail.com</p>
      </div>
    </header>
  )
}

export default Header