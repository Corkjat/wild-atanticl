import { useParams, Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return (
      <div className="page-section">
        <div className="container">
          <h2>Post not found</h2>
          <p>
            <Link to="/our-blog">← Back to Blog</Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <div className="container">
        <article className="blog-detail">
          <h1 className="blog-detail-title">{post.title}</h1>
          <div className="blog-card-meta" style={{ marginBottom: 20 }}>
            by {post.author} | {post.date} | {post.category}
          </div>

          <div className="blog-detail-image">
            <img src={post.image} alt={post.alt} />
          </div>

          <div className="blog-detail-content">
            {post.content.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="blog-detail-nav">
            <Link to="/our-blog">← Back to Blog</Link>
          </div>
        </article>
      </div>
    </div>
  )
}
