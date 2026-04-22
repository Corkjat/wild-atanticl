export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'headline',
      type: 'string',
      title: 'Headline (Landing page)',
      description: 'Main headline shown on the Landing page',
    },
    {
      name: 'subheadline',
      type: 'text',
      title: 'Subheadline (Landing page)',
      rows: 2,
      description: 'Subheadline shown under the main headline',
    },
    {
      name: 'heroImages',
      type: 'array',
      title: 'Hero Slider Images',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    { name: 'heroOverlayImage', type: 'image', title: 'Hero Overlay Image (e.g. handwritten text)' },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    },
    { name: 'sidebarMap', type: 'image', title: 'Sidebar Map Image' },
    {
      name: 'mapEmbedUrl',
      type: 'url',
      title: 'Google Maps Embed URL (Landing page)',
      description: 'Full URL for the Google Maps embed iframe',
    },
    {
      name: 'activityImages',
      type: 'array',
      title: 'Activity Images (Activities page)',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
            { name: 'alt', type: 'string', title: 'Alt Text' },
          ],
        },
      ],
    },
    { name: 'features', type: 'array', title: 'Features', of: [{ type: 'string' }] },
    { name: 'notices', type: 'array', title: 'Notices', of: [{ type: 'string' }] },
  ],
}
