import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'heroImage',
  type: 'document',
  title: 'Hero Image',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'heroImage'}),
    {
      name: 'image', type: 'image', title: 'Image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'alt', type: 'string', title: 'Alt Text' },
  ],
  preview: {
    select: { title: 'alt', media: 'image' },
  },
}
