import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fieldsets: [
    {
      name: 'media',
      title: 'Background Media',
      description: 'Video takes priority over image if both are provided',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
  fields: [
    defineField({
      name: 'vimeoUrl',
      title: 'Vimeo Video URL',
      type: 'url',
      fieldset: 'media',
      description: 'Optional Vimeo video URL for the hero background. If provided, this will be used instead of the background image.',
      validation: (Rule) => Rule.uri({
        scheme: ['http', 'https']
      })
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      fieldset: 'media',
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
      description: 'Fallback background image for the hero (used when no Vimeo URL is provided or video fails to load).',
    }),
    // Add fields for background video later if needed
  ],
}) 