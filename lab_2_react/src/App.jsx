import { useState, useEffect } from "react"
import Header from "./components/Header"
import Profile from "./components/Profile"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Skills from "./components/Skills"
import Footer from "./components/Footer"
import Reviews from "./components/Reviews"
import ContactForm from "./components/ContactForm"

function App() {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    const hour = new Date().getHours()
    setTheme(hour >= 7 && hour < 21 ? "light" : "dark")
  }, [])

  const isDark = theme === "dark"

  return (
    <div className={`min-h-screen py-12 px-4 font-sans transition-colors duration-500 ${
      isDark
        ? "bg-slate-900 text-slate-100"
        : "bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 text-slate-800"
    }`}>

      <div className="max-w-4xl mx-auto mb-4 flex justify-end">
        <button
          onClick={() => setTheme(prev => prev === "light" ? "dark" : "light")}
          className={`px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 cursor-pointer ${
            isDark
              ? "bg-slate-700 border-slate-600 text-slate-100 hover:bg-slate-600"
              : "bg-white border-slate-200 text-slate-700 hover:bg-indigo-50"
          }`}
        >
          {isDark ? "☀️ Денний режим" : "🌙 Нічний режим"}
        </button>
      </div>

      <main className={`max-w-4xl mx-auto p-10 md:p-16 rounded-3xl border transition-all duration-500 ${
        isDark
          ? "bg-slate-800 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
          : "bg-white border-white shadow-[0_20px_50px_rgba(8,_112,_184,_0.07)] hover:shadow-[0_20px_60px_rgba(8,_112,_184,_0.12)]"
      }`}>
        <Header isDark={isDark} />
        <Profile isDark={isDark} />
        <Education isDark={isDark} />
        <Experience isDark={isDark} />
        <Skills isDark={isDark} />
        <Reviews isDark={isDark} />
        <Footer isDark={isDark} />
      </main>

      <ContactForm isDark={isDark} />
    </div>
  )
}

export default App