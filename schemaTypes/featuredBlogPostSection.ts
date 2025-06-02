import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuredBlogPostSection',
  title: 'Featured Blog Post Section',
  type: 'object',
  fieldsets: [
    {
      name: 'title',
      title: 'Section Title',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    },
    {
      name: 'content',
      title: 'Featured Post & Button',
      options: {
        collapsible: true,
        collapsed: true,
      }
    },
    {
      name: 'images',
      title: 'Additional Images',
      description: 'Two additional images for the layout (cover image will come from the blog post)',
      options: {
        collapsible: true,
        collapsed: true,
        columns: 2
      }
    }
  ],
  fields: [
    defineField({
      name: 'titlePart1',
      title: 'Title Line 1',
      type: 'string',
      fieldset: 'title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titlePart2',
      title: 'Title Line 2',
      type: 'string',
      fieldset: 'title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'featuredPost',
        title: 'Featured Post',
        type: 'reference',
        fieldset: 'content',
        to: [{type: 'post'}], // Assuming a 'post' document type exists for blog posts
        description: 'Select the blog post to feature (excerpt and cover image will be pulled from the post).',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
      fieldset: 'content',
      description: 'Text for the button (e.g., "Read More")',
      validation: (Rule) => Rule.required(),
    }),
    // Optional: Add buttonLink field if the link shouldn't auto-generate from the post reference
    // defineField({
    //   name: 'buttonLink',
    //   title: 'Button Link',
    //   type: 'url',
    // }),
    defineField({
      name: 'image1',
      title: 'Image 1 (Large Left)',
      type: 'image',
      fieldset: 'images',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      description: 'First additional image for the layout.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2 (Medium Right)',
      type: 'image',
      fieldset: 'images',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      description: 'Second additional image for the layout.',
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 