export default {
  name: 'galleryImage',
  type: 'document',
  title: 'Gallery Image',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    {
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Cottage', value: 'cottage' },
          { title: 'Local Area', value: 'local-area' },
        ],
      },
    },
    { name: 'order', type: 'number', title: 'Display Order' },
  ],
}
