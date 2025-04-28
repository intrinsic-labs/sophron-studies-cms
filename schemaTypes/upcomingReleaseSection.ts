import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'upcomingReleaseSection',
  title: 'Upcoming Release Section',
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
      name: 'text',
      title: 'Text',
      type: 'blockContent', // Rich text
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image1',
      title: 'Image 1 (Left)',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2 (Right)',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: (Rule) => Rule.uri({allowRelative: true}), // Allow relative links (e.g., /shop) or absolute URLs
    }),
  ],
}) 