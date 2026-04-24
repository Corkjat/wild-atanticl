export default {
  name: 'heroImage',
  type: 'document',
  title: 'Hero Image',
  fields: [
    {
      name: 'image', type: 'image', title: 'Image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    { name: 'order', type: 'number', title: 'Display Order' },
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
  },
}
