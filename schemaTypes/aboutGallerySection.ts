import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutGallerySection',
  title: 'About Gallery Section',
  type: 'object',
  fields: [
    defineField({
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
              validation: Rule => Rule.required(),
            },
          ],
        },
      ],
    }),
  ],
}) 