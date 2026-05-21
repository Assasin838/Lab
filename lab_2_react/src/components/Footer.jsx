import { useEffect, useState } from "react"

function Footer({ isDark }) {
  const [info, setInfo] = useState({})

  useEffect(() => {
    const browserInfo = {
      userAgent:      navigator.userAgent,
      platform:       navigator.platform,
      language:       navigator.language,
      screenWidth:    screen.width + "px",
      screenHeight:   screen.height + "px",
      cookiesEnabled: String(navigator.cookieEnabled),
      colorDepth:     screen.colorDepth + " bit",
      timezone:       Intl.DateTimeFormat().resolvedOptions().timeZone,
    }
    localStorage.setItem("browserInfo", JSON.stringify(browserInfo))
    setInfo(JSON.parse(localStorage.getItem("browserInfo")))
  }, [])

  return (
    <footer className="mt-20">
      <div className="pt-8 border-t-2 border-dashed border-slate-200 text-center mb-8">
        <p className={`font-bold tracking-widest text-sm transition-colors duration-300 cursor-default ${
          isDark ? "text-slate-500 hover:text-indigo-400" : "text-slate-400 hover:text-indigo-400"
        }`}>
          © 2026 STEPAN BAVUS
        </p>
      </div>

      <div className={`rounded-2xl border p-6 transition-colors duration-500 ${
        isDark ? "bg-slate-900 border-slate-700" : "bg-slate-50 border-slate-100"
      }`}>
        <p className={`text-xs font-bold tracking-widest uppercase mb-4 ${
          isDark ? "text-indigo-400" : "text-indigo-500"
        }`}>
          System Info (localStorage)
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {Object.entries(info).map(([key, value]) => (
            <div key={key} className="flex gap-2 text-xs">
              <span className={`font-semibold shrink-0 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                {key}:
              </span>
              <span className={`break-all ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer