export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    { name: 'title', type: 'string', title: 'Site Title' },
    { name: 'logo', type: 'image', title: 'Logo' },
    { name: 'footerLogo', type: 'image', title: 'Footer Logo' },
    { name: 'wildAtlanticWayLogo', type: 'image', title: 'Wild Atlantic Way Logo' },
    { name: 'tripadvisorLogo', type: 'image', title: 'TripAdvisor Logo' },
    { name: 'tripadvisorUrl', type: 'url', title: 'TripAdvisor URL' },
    { name: 'phone', type: 'string', title: 'Phone Number' },
    { name: 'email', type: 'string', title: 'Email' },
    { name: 'address', type: 'text', title: 'Address' },
    { name: 'eircode', type: 'string', title: 'Eircode' },
  ],
}
