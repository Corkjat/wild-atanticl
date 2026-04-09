import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'pnfbtu62',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

// GROQ queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]{
    title, phone, email, address, eircode, tripadvisorUrl
  }`,

  rates: `*[_type == "rate"] | order(order asc){
    _id, year, period, price, order
  }`,

  blogPosts: `*[_type == "blogPost"] | order(date desc){
    _id, title, "slug": slug.current, date, author, category, alt, excerpt, content
  }`,

  blogPostBySlug: (slug: string) =>
    `*[_type == "blogPost" && slug.current == "${slug}"][0]{
      _id, title, "slug": slug.current, date, author, category, alt, excerpt, content
    }`,
}
