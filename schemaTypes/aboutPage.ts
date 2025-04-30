import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
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
      type: 'upcomingReleaseSection',
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