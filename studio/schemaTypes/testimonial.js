export default {
  name: 'testimonial',
  type: 'document',
  title: 'Testimonial',
  fields: [
    { name: 'name', type: 'string', title: 'Guest Name', validation: (Rule) => Rule.required() },
    { name: 'location', type: 'string', title: 'Location (e.g. London, UK)' },
    { name: 'text', type: 'text', title: 'Testimonial Text', validation: (Rule) => Rule.required() },
    {
      name: 'rating',
      type: 'number',
      title: 'Rating (1-5)',
      initialValue: 5,
      validation: (Rule) => Rule.min(1).max(5),
    },
  ],
}
