function Experience() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-4">
        <span className="w-10 h-1.5 bg-cyan-500 rounded-full"></span>
        Professional Experience
      </h2>

      <div className="p-6 md:p-8 rounded-2xl border-2 border-slate-50 shadow-sm bg-white hover:shadow-xl hover:border-cyan-100 hover:-translate-y-1 transition-all duration-300">
        <div className="text-slate-600 leading-relaxed space-y-4 text-lg">
          <p>
            During my first year at university I participated in a team project
            where I developed the front-end of a website.
          </p>
          <p className="font-medium text-slate-800">
            The project was presented to SoftServe representatives
            and received the <span className="text-cyan-600 font-bold">highest score</span>.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Experience