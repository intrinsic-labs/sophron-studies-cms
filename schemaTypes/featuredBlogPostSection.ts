import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'featuredBlogPostSection',
  title: 'Featured Blog Post Section',
  type: 'object',
  fields: [
    defineField({
      name: 'titlePart1',
      title: 'Title Part 1',
      type: 'string',
      description: 'First part of the section title (e.g., "From the")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titlePart2',
      title: 'Title Part 2',
      type: 'string',
      description: 'Second part of the section title (e.g., "Blog")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'text',
      title: 'Excerpt Text',
      type: 'blockContent', // Rich text excerpt
      description: 'Short introductory text for the featured post section.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'featuredPost',
        title: 'Featured Post',
        type: 'reference',
        to: [{type: 'post'}], // Assuming a 'post' document type exists for blog posts
        description: 'Select the blog post to feature.',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
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
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      description: 'First image for the collage layout.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image2',
      title: 'Image 2 (Medium Right)',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      description: 'Second image for the collage layout.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image3',
      title: 'Image 3 (Small Center)',
      type: 'image',
      options: {hotspot: true},
      fields: [defineField({ name: 'alt', type: 'string', title: 'Alt text', validation: (Rule) => Rule.required() })],
      description: 'Third image for the collage layout.',
      validation: (Rule) => Rule.required(),
    }),
  ],
}) 