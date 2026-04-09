import { useSanityQuery } from './useSanity'
import { queries } from '../lib/sanity'

export interface SiteSettings {
  title: string
  phone: string
  email: string
  address: string
  eircode: string
  tripadvisorUrl: string
  logo: any
  footerLogo: any
  wildAtlanticWayLogo: any
  tripadvisorLogo: any
}

const fallback: SiteSettings = {
  title: 'Wild Atlantic Way Cottage',
  phone: '+353 86 352 7678',
  email: 'beenoskeekerry@gmail.com',
  address: 'Farrantooleen, Stradbally, Castlegregory,\nDingle Peninsula, Co Kerry, Ireland',
  eircode: 'V92 TK8K',
  tripadvisorUrl: 'https://www.tripadvisor.ie/VacationRentalReview-g211857-d15062162-Wild_Atlantic_Way_Cottage-Castlegregory_Dingle_Peninsula_County_Kerry.html',
  logo: null,
  footerLogo: null,
  wildAtlanticWayLogo: null,
  tripadvisorLogo: null,
}

export function useSiteSettings() {
  return useSanityQuery<SiteSettings>(queries.siteSettings, fallback)
}
