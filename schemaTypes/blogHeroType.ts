import {defineField, defineType} from 'sanity'

export const blogHeroType = defineType({
  name: 'blogHero',
  title: 'Blog Page Header',
  type: 'document',
  description: 'Configure the header section displayed on the blog listing page',
  fieldsets: [
    {
      name: 'content',
      title: 'Header Content',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'announcement',
      title: 'Announcement Banner',
      description: 'Optional announcement section',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal title for organization in Sanity Studio (e.g., "Blog Page Header Configuration")',
      initialValue: 'Blog Page Header Configuration',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
      description: 'Main title for the blog hero section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      fieldset: 'content',
      description: 'Subtitle or description for the blog section',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'announcement',
      title: 'Announcement',
      type: 'string',
      fieldset: 'announcement',
      description: 'Optional announcement to display under the hero section',
    }),
    defineField({
      name: 'announcementLink',
      title: 'Announcement Link',
      type: 'url',
      fieldset: 'announcement',
      description: 'Link for when the announcement is clicked',
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
      subtitle: 'description',
    },
  },
}) 