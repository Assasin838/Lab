function Skills() {
  const hardSkills = ['C, C#, PHP', 'MySQL', 'HTML, CSS, JavaScript', 'Linux / Windows'];
  const softSkills = ['Responsible', 'Friendly', 'Team player', 'Fast learner'];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-8 flex items-center gap-4">
        <span className="w-10 h-1.5 bg-teal-500 rounded-full"></span>
        Skills
      </h2>

      <div className="grid md:grid-cols-2 gap-10">

        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-indigo-900 mb-4 tracking-wide">HARD SKILLS</h3>
          <ul className="flex flex-wrap gap-3">
            {hardSkills.map(skill => (
              <li 
                key={skill} 
                className="px-4 py-2 bg-white text-indigo-700 font-semibold rounded-lg border-2 border-indigo-100 shadow-sm hover:bg-indigo-600 hover:text-white hover:scale-105 hover:border-indigo-600 transition-all cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl">
          <h3 className="text-xl font-bold text-teal-900 mb-4 tracking-wide">SOFT SKILLS</h3>
          <ul className="flex flex-wrap gap-3">
            {softSkills.map(skill => (
              <li 
                key={skill} 
                className="px-4 py-2 bg-white text-teal-700 font-semibold rounded-lg border-2 border-teal-100 shadow-sm hover:bg-teal-500 hover:text-white hover:scale-105 hover:border-teal-500 transition-all cursor-default"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Skills