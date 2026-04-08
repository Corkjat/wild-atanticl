import { Link } from 'react-router-dom'
import blogPosts from '../data/blogPosts'

export default function Blog() {
  return (
    <div className="page-section">
      <div className="container">
        <div className="blog-list">
          {blogPosts.map((post) => (
            <article key={post.slug} className="blog-card">
              <div className="blog-card-image">
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.alt} />
                </Link>
              </div>
              <div className="blog-card-content">
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <div className="blog-card-meta">
                  by {post.author} | {post.date} | {post.category}
                </div>
                {post.excerpt && <p>{post.excerpt}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
