import { Link } from 'react-router-dom'
import { useSanityQuery } from '../hooks/useSanity'
import { queries, urlFor } from '../lib/sanity'
import blogPostsStatic from '../data/blogPosts'

export default function Blog() {
  const { data: sanityPosts } = useSanityQuery<any[]>(queries.blogPosts, [])

  const useSanity = sanityPosts.length > 0

  return (
    <div className="page-section">
      <div className="container">
        <div className="blog-list">
          {useSanity
            ? sanityPosts.map((post: any) => {
                const imageSrc = post.image?.asset
                  ? urlFor(post.image).width(400).height(267).url()
                  : ''
                const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'short', day: 'numeric',
                })
                return (
                  <article key={post._id} className="blog-card">
                    <div className="blog-card-image">
                      <Link to={`/blog/${post.slug}`}>
                        {imageSrc ? <img src={imageSrc} alt={post.alt} /> : null}
                      </Link>
                    </div>
                    <div className="blog-card-content">
                      <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
                      <div className="blog-card-meta">
                        by {post.author} | {dateFormatted} | {post.category}
                      </div>
                      {post.excerpt && <p>{post.excerpt}</p>}
                    </div>
                  </article>
                )
              })
            : blogPostsStatic.map((post) => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-image">
                    <Link to={`/blog/${post.slug}`}>
                      <img src={post.image} alt={post.alt} />
                    </Link>
                  </div>
                  <div className="blog-card-content">
                    <h3><Link to={`/blog/${post.slug}`}>{post.title}</Link></h3>
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
