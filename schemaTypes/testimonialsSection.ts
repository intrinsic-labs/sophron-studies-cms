import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonialsSection',
  title: 'Testimonials Section',
  type: 'object',
  fieldsets: [
    {
      name: 'header',
      title: 'Section Header',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      options: {
        collapsible: true,
        collapsed: true,
      }
    }
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Section Title',
      type: 'string',
      fieldset: 'header',
      description: 'Optional title for the testimonials section',
    }),
    defineField({
      name: 'subtitle',
      title: 'Section Subtitle',
      type: 'string',
      fieldset: 'header',
      description: 'Optional subtitle or description for the testimonials section',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      fieldset: 'testimonials',
      of: [
        {
          type: 'object',
          name: 'testimonial',
          title: 'Testimonial',
          fields: [
            defineField({
              name: 'text',
              title: 'Testimonial Text',
              type: 'text',
              description: 'The testimonial quote or text',
              validation: (Rule) => Rule.required().min(10).max(500),
            }),
            defineField({
              name: 'citation',
              title: 'Citation',
              type: 'string',
              description: 'Who gave this testimonial (e.g., "John Doe, CEO of Company")',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'citation',
              subtitle: 'text',
              media: 'image',
            },
            prepare(selection) {
              const {title, subtitle} = selection
              return {
                title: title || 'Unnamed testimonial',
                subtitle: subtitle ? `"${subtitle.substring(0, 60)}..."` : 'No text provided',
                media: selection.media,
              }
            },
          },
        }
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      testimonials: 'testimonials',
    },
    prepare(selection) {
      const {title, testimonials} = selection
      const count = testimonials?.length || 0
      return {
        title: title || 'Testimonials Section',
        subtitle: `${count} testimonial${count !== 1 ? 's' : ''}`,
      }
    },
  },
}) 