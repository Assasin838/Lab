import { useEffect, useState } from "react"

function ContactForm({ isDark }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 60000)
    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
    >
      <div className={`w-full max-w-md rounded-3xl border p-8 shadow-2xl transition-colors duration-500 ${
        isDark
          ? "bg-slate-800 border-slate-700"
          : "bg-white border-slate-100"
      }`}>
        <h3 className={`text-xl font-extrabold mb-1 ${isDark ? "text-slate-100" : "text-slate-800"}`}>
          Зворотній зв'язок
        </h3>
        <p className={`text-xs mb-6 ${isDark ? "text-slate-400" : "text-slate-400"}`}>
          Залиште контакти — відповімо найближчим часом.
        </p>

        <form action="https://formspree.io/f/xykoppjw" method="POST" className="flex flex-col gap-3">
          <input
            type="text"
            name="name"
            placeholder="Ім'я"
            required
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-indigo-400 ${
              isDark
                ? "bg-slate-900 border-slate-600 text-slate-100 placeholder-slate-500"
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-indigo-400 ${
              isDark
                ? "bg-slate-900 border-slate-600 text-slate-100 placeholder-slate-500"
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
            }`}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Номер телефону"
            required
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-indigo-400 ${
              isDark
                ? "bg-slate-900 border-slate-600 text-slate-100 placeholder-slate-500"
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
            }`}
          />
          <textarea
            name="message"
            placeholder="Ваше повідомлення..."
            rows={4}
            className={`w-full rounded-xl border px-4 py-2.5 text-sm outline-none transition-colors focus:border-indigo-400 resize-none ${
              isDark
                ? "bg-slate-900 border-slate-600 text-slate-100 placeholder-slate-500"
                : "bg-slate-50 border-slate-200 text-slate-800 placeholder-slate-400"
            }`}
          />

          <div className="flex gap-3 mt-1">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors duration-200 cursor-pointer"
            >
              Відправити
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className={`px-5 py-2.5 rounded-xl border text-sm font-semibold transition-colors duration-200 cursor-pointer ${
                isDark
                  ? "border-slate-600 text-slate-300 hover:border-indigo-400"
                  : "border-slate-200 text-slate-600 hover:border-indigo-300"
              }`}
            >
              Закрити
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm