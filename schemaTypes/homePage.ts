import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  description: 'Manage content and sections for the website homepage',
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
      type: 'object',
      fieldsets: [
        {
          name: 'content',
          title: 'Release Content',
          options: {
            collapsible: true,
            collapsed: true,
          }
        },
        {
          name: 'overrides',
          title: 'Button Overrides',
          description: 'Optional customizations for this page',
          options: {
            collapsible: true,
            collapsed: true,
            columns: 2
          }
        }
      ],
      fields: [
        defineField({
          name: 'reference',
          title: 'Upcoming Release',
          type: 'reference',
          fieldset: 'content',
          to: [{ type: 'upcomingReleaseSection' }],
        }),
        defineField({
          name: 'customButtonText',
          title: 'Custom Button Text (Optional)',
          type: 'string',
          fieldset: 'overrides',
          description: 'Override the button text from the referenced section',
        }),
        defineField({
          name: 'customButtonLink',
          title: 'Custom Button Link (Optional)',
          type: 'url',
          fieldset: 'overrides',
          description: 'Override the button link from the referenced section',
          validation: (Rule) => Rule.uri({allowRelative: true}),
        }),
      ],
    }),
    defineField({
        name: 'newsletterSection',
        title: 'Newsletter Section',
        type: 'reference',
        to: [{ type: 'newsletterSection' }],
        description: 'Reference to the global newsletter configuration',
    }),
    defineField({
        name: 'testimonialsSection',
        title: 'Testimonials Section',
        type: 'testimonialsSection',
        description: 'Customer testimonials and reviews',
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