import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  description: 'Manage content and sections for the about page',
  fieldsets: [
    {
      name: 'hero',
      title: 'Hero Section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'content',
      title: 'Content Sections',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'cta',
      title: 'Call-to-Action Sections',
      options: {
        collapsible: true,
        collapsed: true,
        // columns: 2
      }
    }
  ],
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
      fieldset: 'hero',
    }),
    defineField({
      name: 'aboutBioSection',
      title: 'About Bio Section',
      type: 'aboutBioSection',
      fieldset: 'content',
    }),
    defineField({
      name: 'aboutGallerySection',
      title: 'About Gallery Section',
      type: 'aboutGallerySection',
      fieldset: 'content',
    }),
    defineField({
      name: 'upcomingReleaseSection',
      title: 'Upcoming Release Section',
      type: 'object',
      fieldset: 'cta',
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
          validation: (Rule) => Rule.uri({ allowRelative: true }),
        }),
      ],
    }),
    defineField({
      name: 'newsletterSection',
      title: 'Newsletter Section',
      type: 'reference',
      fieldset: 'cta',
      to: [{ type: 'newsletterSection' }],
      description: 'Reference to the global newsletter configuration',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      return { title: selection.title || 'About Page' }
    },
  },
}) 