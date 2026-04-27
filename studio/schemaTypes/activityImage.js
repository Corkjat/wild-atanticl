export default {
  name: 'activityImage',
  type: 'document',
  title: 'Activity Image',
  fields: [
    {
      name: 'activity',
      type: 'string',
      title: 'Activity',
      options: {
        list: [
          { title: 'Inch Beach', value: 'inch-beach' },
          { title: 'Annascaul Village', value: 'annascaul-village' },
          { title: 'Annascaul Lake Walk', value: 'annascaul-lake-walk' },
          { title: 'Dingle Peninsula', value: 'dingle-peninsula' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image', type: 'image', title: 'Image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    },
    { name: 'alt', type: 'string', title: 'Alt Text' },
    { name: 'order', type: 'number', title: 'Display Order' },
  ],
  preview: {
    select: { title: 'activity', media: 'image' },
  },
}
