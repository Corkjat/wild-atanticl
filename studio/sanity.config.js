import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Inch Beach House',

  projectId: 'xb9llqp5',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S, context) =>
        S.list()
          .title('Content')
          .items([
            orderableDocumentListDeskItem({type: 'heroImage', title: 'Hero Images', S, context}),
            orderableDocumentListDeskItem({type: 'galleryImage', title: 'Gallery Images', S, context}),
            orderableDocumentListDeskItem({type: 'activityImage', title: 'Activity Images', S, context}),
            S.divider(),
            ...S.documentTypeListItems().filter(
              item => !['heroImage', 'galleryImage', 'activityImage'].includes(item.getId() ?? '')
            ),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
