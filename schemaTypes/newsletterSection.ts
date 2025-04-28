import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'newsletterSection',
  title: 'Newsletter Section',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Section title (e.g., "Stay in Touch")',
      initialValue: 'Stay in Touch',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Section subtitle text.',
      initialValue: 'Join our newsletter now! We will keep you posted on the latest and greatest.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'placeholderText',
      title: 'Input Placeholder Text',
      type: 'string',
      description: 'Placeholder text for the email input field.',
      initialValue: 'name@example.com',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      description: 'Text for the submit button.',
      initialValue: 'Submit',
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 