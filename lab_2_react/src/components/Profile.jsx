function Profile({ isDark }) {
  return (
    <section className={`mb-12 p-8 rounded-2xl border-l-4 border-indigo-500 hover:shadow-md transition-all duration-300 ${
      isDark
        ? "bg-slate-700/50"
        : "bg-gradient-to-r from-indigo-50/50 to-transparent"
    }`}>
      <h2 className={`text-3xl font-bold mb-4 tracking-tight ${
        isDark ? "text-slate-100" : "text-slate-800"
      }`}>
        Profile
      </h2>

      <div className={`text-lg leading-relaxed space-y-3 font-medium ${
        isDark ? "text-slate-300" : "text-slate-700"
      }`}>
        <p>
          I am a 3rd-year student at Lviv Polytechnic National University
          studying cybersecurity.
        </p>
        <p className={isDark ? "text-indigo-300" : "text-indigo-900"}>
          My main interest is <span className="font-bold underline decoration-cyan-400 decoration-2 underline-offset-4">penetration testing</span> and vulnerability assessment.
        </p>
      </div>
    </section>
  )
}

export default Profile