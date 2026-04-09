import { useState, useEffect } from 'react'
import { client } from '../lib/sanity'

export function useSanityQuery<T>(query: string, fallback: T): { data: T; loading: boolean } {
  const [data, setData] = useState<T>(fallback)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch<T>(query)
      .then((result) => {
        if (result) setData(result)
      })
      .catch((err) => {
        console.warn('Sanity fetch failed, using fallback data:', err.message)
      })
      .finally(() => setLoading(false))
  }, [query])

  return { data, loading }
}
