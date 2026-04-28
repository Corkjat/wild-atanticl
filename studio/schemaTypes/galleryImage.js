import {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'

export default {
  name: 'galleryImage',
  type: 'document',
  title: 'Gallery Image',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({type: 'galleryImage'}),
    { name: 'title', type: 'string', title: 'Title' },
    {
      name: 'image', type: 'image', title: 'Image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    {
      name: 'category', type: 'string', title: 'Category',
      options: {
        list: [
          { title: 'Interior', value: 'Interior' },
          { title: 'Exterior', value: 'Exterior' },
          { title: 'Views', value: 'Views' },
          { title: 'Bedrooms', value: 'Bedrooms' },
          { title: 'Kitchen', value: 'Kitchen' },
          { title: 'Bathrooms', value: 'Bathrooms' },
          { title: 'Outdoor', value: 'Outdoor' },
        ],
      },
    },
  ],
  preview: {
    select: { title: 'title', media: 'image' },
  },
}
