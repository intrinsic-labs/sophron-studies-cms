import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsletterSection',
  title: 'Newsletter Config',
  type: 'document',
  description: 'Global newsletter section configuration used across the site',
  fieldsets: [
    {
      name: 'content',
      title: 'Content',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'form',
      title: 'Form Elements',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    }
  ],
  fields: [
    defineField({
      name: 'internalTitle',
      title: 'Internal Title',
      type: 'string',
      description: 'Internal title for organization in Sanity Studio (e.g., "Site Newsletter Configuration")',
      initialValue: 'Site Newsletter Configuration',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      fieldset: 'content',
      description: 'Section title (e.g., "Stay in Touch")',
      initialValue: 'Stay in Touch',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      fieldset: 'content',
      description: 'Section subtitle text.',
      initialValue: 'Join our newsletter now! We will keep you posted on the latest and greatest.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placeholderText',
      title: 'Input Placeholder Text',
      type: 'string',
      fieldset: 'form',
      description: 'Placeholder text for the email input field.',
      initialValue: 'name@example.com',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'form',
      description: 'Text for the submit button.',
      initialValue: 'Submit',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'internalTitle',
    },
    prepare(selection) {
      return {title: selection.title || 'Newsletter Config'}
    },
  },
}) 