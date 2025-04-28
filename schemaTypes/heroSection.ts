import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The main headline for the hero section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot/crop functionality
      },
      fields: [
        defineField({
            name: 'alt',
            type: 'string',
            title: 'Alternative text',
            description: 'Important for SEO and accessibility.',
            validation: (Rule) => Rule.required(),
        })
      ],
      description: 'Optional background image for the hero.',
    }),
    // Add fields for background video later if needed
  ],
}) 