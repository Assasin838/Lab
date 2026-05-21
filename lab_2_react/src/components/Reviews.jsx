import { useEffect, useState } from "react"

function Reviews({ isDark }) {
  const [comments, setComments] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
      .then(res => res.json())
      .then(data => {
        setComments(data)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  return (
    <section className="mt-14">
      <h2 className={`text-xs font-bold tracking-widest uppercase mb-6 ${
        isDark ? "text-indigo-400" : "text-indigo-600"
      }`}>
        Employer Reviews
      </h2>

      {loading && (
        <p className={`text-sm ${isDark ? "text-slate-400" : "text-slate-400"}`}>
          Завантаження відгуків...
        </p>
      )}

      {error && (
        <p className="text-sm text-red-400">Помилка завантаження відгуків.</p>
      )}

      <div className="flex flex-col gap-4">
        {comments.map(comment => (
          <div
            key={comment.id}
            className={`rounded-2xl border p-5 transition-all duration-300 ${
              isDark
                ? "bg-slate-900 border-slate-700 hover:border-indigo-500"
                : "bg-slate-50 border-slate-100 hover:border-indigo-200 hover:shadow-sm"
            }`}
          >
            <p className={`text-sm font-semibold capitalize mb-1 ${
              isDark ? "text-slate-100" : "text-slate-700"
            }`}>
              {comment.name}
            </p>
            <p className={`text-xs mb-3 ${isDark ? "text-indigo-400" : "text-indigo-500"}`}>
              {comment.email}
            </p>
            <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews