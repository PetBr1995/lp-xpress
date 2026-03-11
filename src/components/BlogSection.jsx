function BlogSection({ blogs }) {
  return (
    <section className="blog container">
      <h3>Blog</h3>
      <div className="blog-grid">
        {blogs.map((post) => (
          <article key={post.title} className="blog-card">
            <div className="blog-thumb" />
            <small>{post.date}</small>
            <h4>{post.title}</h4>
            <p>{post.text}</p>
            <button className="btn-dark">Leia mais</button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default BlogSection
