function Education() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4">
        <span className="w-10 h-1.5 bg-indigo-500 rounded-full"></span>
        Education
      </h2>

      <ul className="space-y-4">
        <li className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-indigo-50 transition-colors duration-300 group">
          <div className="flex flex-col">
            <span className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
              Lviv Polytechnic National University
            </span>
            <span className="text-lg text-slate-600 mt-1">Bachelor’s Degree in Cybersecurity</span>
            <span className="inline-block mt-3 px-3 py-1 bg-white border border-slate-200 text-slate-500 text-sm rounded-full w-max font-semibold shadow-sm">
              2023 – Present
            </span>
          </div>
        </li>

        <li className="p-6 rounded-xl bg-slate-50 border border-slate-100 hover:bg-indigo-50 transition-colors duration-300 group">
          <span className="text-xl font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
            Full General Secondary Education
          </span>
        </li>
      </ul>
    </section>
  )
}

export default Education