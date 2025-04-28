import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'definitionSection',
  title: 'Definition Section',
  type: 'object',
  fields: [
    defineField({
      name: 'titlePart1',
      title: 'Title Part 1',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titlePart2',
      title: 'Title Part 2',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'definitionText',
      title: 'Definition Text',
      type: 'blockContent', // Rich text
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'importantPointTitle',
      title: 'Important Point Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'importantPointText',
      title: 'Important Point Text',
      type: 'blockContent', // Rich text
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image1',
      title: 'Image 1 (Rotated)',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            validation: (Rule) => Rule.required(),
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            validation: (Rule) => Rule.required(),
        })
      ],
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 