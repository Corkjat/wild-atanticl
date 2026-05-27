import { useEffect } from 'react'

interface SEOProps {
  title: string
  description: string
  canonical: string
}

export function useSEO({ title, description, canonical }: SEOProps) {
  useEffect(() => {
    document.title = title

    const set = (sel: string, attr: string, val: string) => {
      document.querySelector(sel)?.setAttribute(attr, val)
    }

    set('meta[name="description"]', 'content', description)
    set('meta[property="og:title"]', 'content', title)
    set('meta[property="og:description"]', 'content', description)
    set('meta[property="og:url"]', 'content', canonical)
    set('meta[name="twitter:title"]', 'content', title)
    set('meta[name="twitter:description"]', 'content', description)

    let link = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = canonical
  }, [title, description, canonical])
}
