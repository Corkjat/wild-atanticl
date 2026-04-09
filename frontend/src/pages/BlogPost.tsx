import { useParams, Link } from 'react-router-dom'
import { useSanityQuery } from '../hooks/useSanity'
import { queries, urlFor } from '../lib/sanity'
import PortableText from '../components/PortableText'
import blogPostsStatic from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const { data: post, loading } = useSanityQuery<any>(
    queries.blogPostBySlug(slug || ''),
    null
  )
  const staticPost = blogPostsStatic.find((p) => p.slug === slug)

  if (loading) {
    return (
      <div className="page-section">
        <div className="container"><p>Loading...</p></div>
      </div>
    )
  }

  if (post) {
    const dateFormatted = new Date(post.date).toLocaleDateString('en-US', {
      year: 'numeric', month: 'short', day: 'numeric',
    })
    const imageSrc = post.image?.asset
      ? urlFor(post.image).width(800).url()
      : staticPost?.image || ''

    return (
      <div className="page-section">
        <div className="container">
          <article className="blog-detail">
            <h1 className="blog-detail-title">{post.title}</h1>
            <div className="blog-card-meta" style={{ marginBottom: 20 }}>
              by {post.author} | {dateFormatted} | {post.category}
            </div>
            {imageSrc && (
              <div className="blog-detail-image">
                <img src={imageSrc} alt={post.alt} />
              </div>
            )}
            <div className="blog-detail-content">
              <PortableText blocks={post.content} />
            </div>
            <div className="blog-detail-nav">
              <Link to="/our-blog">&larr; Back to Blog</Link>
            </div>
          </article>
        </div>
      </div>
    )
  }

  if (!staticPost) {
    return (
      <div className="page-section">
        <div className="container">
          <h2>Post not found</h2>
          <p><Link to="/our-blog">&larr; Back to Blog</Link></p>
        </div>
      </div>
    )
  }

  return (
    <div className="page-section">
      <div className="container">
        <article className="blog-detail">
          <h1 className="blog-detail-title">{staticPost.title}</h1>
          <div className="blog-card-meta" style={{ marginBottom: 20 }}>
            by {staticPost.author} | {staticPost.date} | {staticPost.category}
          </div>
          <div className="blog-detail-image">
            <img src={staticPost.image} alt={staticPost.alt} />
          </div>
          <div className="blog-detail-content">
            {staticPost.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="blog-detail-nav">
            <Link to="/our-blog">&larr; Back to Blog</Link>
          </div>
        </article>
      </div>
    </div>
  )
}
