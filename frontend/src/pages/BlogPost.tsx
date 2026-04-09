import { useParams, Link } from 'react-router-dom'
import { useSanityQuery } from '../hooks/useSanity'
import { queries } from '../lib/sanity'
import PortableText from '../components/PortableText'
import blogPostsStatic from '../data/blogPosts'

interface SanityBlogPost {
  _id: string
  title: string
  slug: string
  date: string
  author: string
  category: string
  alt: string
  excerpt: string
  content: any[]
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>()

  // Try Sanity first
  const { data: sanityPost, loading } = useSanityQuery<SanityBlogPost | null>(
    queries.blogPostBySlug(slug || ''),
    null
  )

  // Static fallback
  const staticPost = blogPostsStatic.find((p) => p.slug === slug)

  if (loading) {
    return (
      <div className="page-section">
        <div className="container">
          <p>Loading...</p>
        </div>
      </div>
    )
  }

  // Use Sanity data if available, otherwise static
  if (sanityPost) {
    const dateFormatted = new Date(sanityPost.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    })

    // Find matching static post for the image
    const matchingStatic = blogPostsStatic.find((p) => p.slug === slug)

    return (
      <div className="page-section">
        <div className="container">
          <article className="blog-detail">
            <h1 className="blog-detail-title">{sanityPost.title}</h1>
            <div className="blog-card-meta" style={{ marginBottom: 20 }}>
              by {sanityPost.author} | {dateFormatted} | {sanityPost.category}
            </div>

            {matchingStatic && (
              <div className="blog-detail-image">
                <img src={matchingStatic.image} alt={sanityPost.alt} />
              </div>
            )}

            <div className="blog-detail-content">
              <PortableText blocks={sanityPost.content} />
            </div>

            <div className="blog-detail-nav">
              <Link to="/our-blog">← Back to Blog</Link>
            </div>
          </article>
        </div>
      </div>
    )
  }

  // Fallback to static
  if (!staticPost) {
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
          <h1 className="blog-detail-title">{staticPost.title}</h1>
          <div className="blog-card-meta" style={{ marginBottom: 20 }}>
            by {staticPost.author} | {staticPost.date} | {staticPost.category}
          </div>

          <div className="blog-detail-image">
            <img src={staticPost.image} alt={staticPost.alt} />
          </div>

          <div className="blog-detail-content">
            {staticPost.content.map((paragraph, i) => (
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
