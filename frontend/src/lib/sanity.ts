import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: 'pnfbtu62',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
})

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const queries = {
  siteSettings: `*[_type == "siteSettings"][0]{
    title, phone, email, address, eircode, tripadvisorUrl,
    logo, footerLogo, wildAtlanticWayLogo, tripadvisorLogo
  }`,

  pages: `*[_type == "page"]{
    _id, title, "slug": slug.current, heroImages, heroOverlayImage,
    content, sidebarMap, features, notices
  }`,

  pageBySlug: (slug: string) =>
    `*[_type == "page" && slug.current == "${slug}"][0]{
      _id, title, "slug": slug.current,
      headline, subheadline, mapEmbedUrl,
      heroImages, heroOverlayImage,
      content, sidebarMap, features, notices,
      activityImages[]{alt, image}
    }`,

  rates: `*[_type == "rate"] | order(order asc){
    _id, year, period, price, order
  }`,

  blogPosts: `*[_type == "blogPost"] | order(date desc){
    _id, title, "slug": slug.current, date, author, category,
    image, alt, excerpt, content
  }`,

  blogPostBySlug: (slug: string) =>
    `*[_type == "blogPost" && slug.current == "${slug}"][0]{
      _id, title, "slug": slug.current, date, author, category,
      image, alt, excerpt, content
    }`,

  galleryImages: `*[_type == "galleryImage"] | order(order asc){
    _id, title, image, alt, category, order
  }`,
}
