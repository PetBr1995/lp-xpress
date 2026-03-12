function BlogSection({ blogs }) {
  return (
    <section className="mx-auto w-full max-w-[960px] px-6 py-14 text-center" data-reveal="up">
      <h3 className="m-0 text-[48px] leading-[1.05] max-[920px]:text-[34px]">Blog</h3>

      <div className="mt-[26px] grid grid-cols-3 gap-4 max-[920px]:grid-cols-2 max-[560px]:grid-cols-1 max-[560px]:gap-6">
        {blogs.map((post, index) => (
          <article
            key={post.title}
            className="flex min-h-[380px] flex-col text-left"
            data-reveal="up"
            data-reveal-delay={index * 90}
          >
            <div className="mb-2.5 h-[150px] rounded-lg bg-[linear-gradient(130deg,#6091b2,#d6d8e0)]" />
            <small className="text-[12px] text-[#6a6f8f]">{post.date}</small>
            <h4 className="my-1.5 text-[30px] leading-[1.1]">{post.title}</h4>
            <p className="overflow-hidden text-ellipsis leading-[1.45] text-[#50546e] [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:4]">
              {post.text}
            </p>
            <button className="mt-auto rounded-md bg-[#222a67] px-5 py-2 text-[12px] text-white">Leia mais</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
