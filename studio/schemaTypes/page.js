export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    {
      name: 'heroImages',
      type: 'array',
      title: 'Hero Slider Images',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    { name: 'heroOverlayImage', type: 'image', title: 'Hero Overlay Image' },
    { name: 'content', type: 'array', title: 'Content', of: [{ type: 'block' }] },
    { name: 'sidebarMap', type: 'image', title: 'Sidebar Map Image' },
    { name: 'features', type: 'array', title: 'Features', of: [{ type: 'string' }] },
    { name: 'notices', type: 'array', title: 'Notices', of: [{ type: 'string' }] },
  ],
}
