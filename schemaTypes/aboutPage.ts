import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  description: 'Manage content and sections for the about page',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for the about page in Sanity Studio (e.g., "About Page Content")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'aboutHeroSection',
      title: 'About Hero Section',
      type: 'aboutHeroSection',
    }),
    defineField({
      name: 'aboutBioSection',
      title: 'About Bio Section',
      type: 'aboutBioSection',
    }),
    defineField({
      name: 'aboutGallerySection',
      title: 'About Gallery Section',
      type: 'aboutGallerySection',
    }),
    defineField({
      name: 'upcomingReleaseSection',
      title: 'Upcoming Release Section',
      type: 'object',
      fields: [
        defineField({
          name: 'reference',
          title: 'Upcoming Release',
          type: 'reference',
          to: [{ type: 'upcomingReleaseSection' }],
        }),
        defineField({
          name: 'customButtonText',
          title: 'Custom Button Text (Optional)',
          type: 'string',
          description: 'Override the button text from the referenced section',
        }),
        defineField({
          name: 'customButtonLink',
          title: 'Custom Button Link (Optional)',
          type: 'url',
          description: 'Override the button link from the referenced section',
          validation: (Rule) => Rule.uri({allowRelative: true}),
        }),
      ],
    }),
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
      type: 'newsletterSection',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {title: selection.title || 'About Page'}
    },
  },
}) 