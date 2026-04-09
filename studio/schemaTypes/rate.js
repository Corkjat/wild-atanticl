export default {
  name: 'rate',
  type: 'document',
  title: 'Rate',
  fields: [
    { name: 'year', type: 'string', title: 'Year', validation: (Rule) => Rule.required() },
    { name: 'period', type: 'string', title: 'Period', validation: (Rule) => Rule.required() },
    { name: 'price', type: 'string', title: 'Price', validation: (Rule) => Rule.required() },
    { name: 'order', type: 'number', title: 'Display Order' },
  ],
}
