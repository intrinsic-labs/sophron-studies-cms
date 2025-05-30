import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'upcomingReleaseSection',
  title: 'Upcoming Releases',
  type: 'document',
  description: 'Featured upcoming product releases and announcements',
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Identifier for this upcoming release within Sanity Studio (e.g., "Fall 2024 Book Release")',
      validation: (Rule) => Rule.required(),
    }),
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
      title: 'Image 1 (Back)',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2 (Cover)',
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
  preview: {
    select: {
      title: 'internalTitle',
      media: 'image1',
    },
    prepare(selection) {
        const { title, media } = selection
        return {
            title: title || 'Untitled Upcoming Release',
            media: media,
        }
    }
  }
}) 