import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Internal title for the home page in Sanity Studio (e.g., "Home Page Content")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroSection',
      title: 'Hero Section',
      type: 'heroSection', // Will reference the heroSection object type
    }),
    defineField({
      name: 'definitionSection',
      title: 'Definition Section',
      type: 'definitionSection', // Will reference the definitionSection object type
    }),
    defineField({
        name: 'featuredBlogPostSection',
        title: 'Featured Blog Post Section',
        type: 'featuredBlogPostSection', // Will reference the featuredBlogPostSection object type
    }),
    defineField({
      name: 'upcomingReleaseSection',
      title: 'Upcoming Release Section',
      type: 'upcomingReleaseSection', // Will reference the upcomingReleaseSection object type
    }),
    // Assuming Newsletter is consistent across pages, maybe a global setting later?
    // For now, include it in the home page document.
    defineField({
        name: 'newsletterSection',
        title: 'Newsletter Section',
        type: 'newsletterSection', // Will reference the newsletterSection object type
    }),
    // Add other sections as needed (e.g., featured shop items)
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return {title: selection.title || 'Home Page'}
    },
  },
}) 