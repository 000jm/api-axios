
import axios from 'axios'
import { useEffect, useState } from 'react'

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const req = async () => {
      const res = await axios.get('https://fakestoreapi.com/products')
        .then(response => response.data)
      setPosts(res)
    }
    req()
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <section className="mx-auto max-w-3xl space-y-8">

        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Posts
          </h1>

          <p className="text-sm text-gray-500">
            Confira as publicações disponíveis.
          </p>
        </header>

        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">
            Todas as publicações
          </h2>

          <span className="rounded-full bg-gray-200 px-3 py-1 text-xs font-semibold text-gray-600">
            {posts.length} posts
          </span>
        </div>

        <ul className="grid gap-4">
          {posts.map(post => (
            <li
              key={post.id}
              className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-md"
            >
              <div className="mb-3 flex items-center justify-between">
                <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">
                  Post #{post.id}
                </span>

                <span className="text-xs text-gray-400">
                  Usuário {post.userId}
                </span>
              </div>

              <h3 className="text-base font-semibold leading-relaxed text-gray-900 transition group-hover:text-blue-600">
                {post.title}
              </h3>
            </li>
          ))}
        </ul>

      </section>
    </main>
  )
}

export default App
