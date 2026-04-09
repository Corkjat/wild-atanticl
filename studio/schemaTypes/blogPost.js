export default {
  name: 'blogPost',
  type: 'document',
  title: 'Blog Post',
  fields: [
    { name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required() },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'date', type: 'datetime', title: 'Date' },
    {
      name: 'author',
      type: 'string',
      title: 'Author',
      initialValue: 'WildAtlanticWayCottage',
    },
    { name: 'category', type: 'string', title: 'Category', initialValue: 'Blog' },
    { name: 'image', type: 'image', title: 'Featured Image', options: { hotspot: true } },
    { name: 'alt', type: 'string', title: 'Image Alt Text' },
    { name: 'excerpt', type: 'text', title: 'Excerpt' },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }, { type: 'image', options: { hotspot: true } }],
    },
  ],
}
