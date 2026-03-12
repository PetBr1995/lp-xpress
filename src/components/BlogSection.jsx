import { useEffect, useState } from 'react'

const POSTS_API_URL = 'https://graficaxpress.com.br/wp-json/wp/v2/posts?_embed&per_page=3'

function toPlainText(value = '') {
  return value.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

function formatPostDate(value) {
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function BlogSection({ blogs = [] }) {
  const [posts, setPosts] = useState(blogs.slice(0, 3))

  useEffect(() => {
    const controller = new AbortController()

    const loadPosts = async () => {
      try {
        const response = await fetch(POSTS_API_URL, { signal: controller.signal })
        if (!response.ok) return

        const payload = await response.json()
        if (!Array.isArray(payload)) return

        const parsedPosts = payload.slice(0, 3).map((post) => ({
          title: toPlainText(post?.title?.rendered || ''),
          text: toPlainText(post?.excerpt?.rendered || ''),
          date: formatPostDate(post?.date),
          image: post?._embedded?.['wp:featuredmedia']?.[0]?.source_url || '',
          url: post?.link || '#',
        }))

        if (parsedPosts.length) {
          const merged = [...parsedPosts]
          const fallback = blogs.map((post) => ({
            ...post,
            image: post.image || '',
            url: post.url || '#',
          }))

          for (const item of fallback) {
            if (merged.length >= 3) break
            merged.push(item)
          }

          setPosts(merged.slice(0, 3))
        }
      } catch {
        // keep fallback posts when API is unavailable
      }
    }

    loadPosts()
    return () => controller.abort()
  }, [blogs])

  return (
    <section className="mx-auto w-full max-w-[960px] px-6 py-14 text-center" data-reveal="up">
      <h3 className="m-0 text-[48px] leading-[1.05] max-[920px]:text-[34px]">Blog</h3>

      <div className="mt-[26px] flex flex-wrap justify-center gap-4 max-[560px]:gap-6">
        {posts.map((post, index) => (
          <article
            key={post.title}
            className="flex min-h-[380px] w-full max-w-[280px] flex-col text-left"
            data-reveal="up"
            data-reveal-delay={index * 90}
          >
            {post.image ? (
              <img
                src={post.image}
                alt={post.title}
                className="mb-2.5 h-[150px] w-full rounded-lg object-cover"
                loading="lazy"
              />
            ) : (
              <div className="mb-2.5 h-[150px] rounded-lg bg-[linear-gradient(130deg,#6091b2,#d6d8e0)]" />
            )}
            <small className="text-[12px] text-[#6a6f8f]">{post.date}</small>
            <h4 className="my-1.5 text-[30px] leading-[1.1]">{post.title}</h4>
            <p className="overflow-hidden text-ellipsis leading-[1.45] text-[#50546e] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
              {post.text}
            </p>
            <a
              href={post.url}
              data-native-nav
              className="mt-auto w-fit rounded-md bg-[#222a67] px-5 py-2 text-[12px] text-white no-underline"
            >
              Saiba mais
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
