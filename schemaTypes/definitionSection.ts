import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'definitionSection',
  title: 'Definition Section',
  type: 'object',
  fieldsets: [
    {
      name: 'title',
      title: 'Section Title',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    },
    {
      name: 'content',
      title: 'Main Content',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'images',
      title: 'Images',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    },
    {
      name: 'vision',
      title: 'Vision Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
  fields: [
    defineField({
      name: 'titlePart1',
      title: 'Title Line 1',
      type: 'string',
      fieldset: 'title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titlePart2',
      title: 'Title Line 2',
      type: 'string',
      fieldset: 'title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'definitionText',
      title: 'Definition Text',
      type: 'blockContent', // Rich text
      fieldset: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image1',
      title: 'Rear Image',
      type: 'image',
      fieldset: 'images',
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
      title: 'Front Image',
      type: 'image',
      fieldset: 'images',
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
      name: 'importantPointTitle',
      title: 'Vision Section Title',
      type: 'string',
      fieldset: 'vision',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'importantPointText',
      title: 'Vision Text',
      type: 'blockContent', // Rich text
      fieldset: 'vision',
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 