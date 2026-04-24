export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    { name: 'quote', type: 'text', title: 'Guest Quote', validation: (Rule) => Rule.required() },
    { name: 'author', type: 'string', title: 'Guest Name', validation: (Rule) => Rule.required() },
    { name: 'date', type: 'string', title: 'Date (e.g. June 2025)' },
  ],
  preview: {
    select: { title: 'author', subtitle: 'date' },
  },
}
