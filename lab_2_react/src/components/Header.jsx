function Header({ isDark }) {
  return (
    <header className="mb-14 group">
      <h1 
        className="text-5xl md:text-6xl font-extrabold tracking-tight mb-3 origin-left transition-transform duration-300 group-hover:scale-[1.02]"
        style={{ color: "#16a34a" }}
      >
        Stepan Bavus
      </h1>
      <p 
        className="text-2xl font-semibold mb-8 tracking-wide"
        style={{ color: "#dc2626" }}
      >
        Cybersecurity Student
      </p>
      <div 
        className="inline-flex flex-col md:flex-row md:items-center gap-2 md:gap-6 p-4 rounded-xl border shadow-inner font-medium"
        style={{ backgroundColor: "#fef9c3", borderColor: "#eab308" }}
      >
        <p style={{ color: "#7c3aed" }}>
          Phone: +38 (096) 67-12-117
        </p>
        <span className="hidden md:block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#f97316" }}></span>
        <p style={{ color: "#0891b2" }}>
          Email: bavusstep@gmail.com
        </p>
      </div>
    </header>
  )
}
export default Header
