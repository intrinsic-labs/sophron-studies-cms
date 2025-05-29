import { defineType, defineField } from 'sanity';

export const categoryType = defineType({
  name: 'category',
  title: 'Product Categories',
  type: 'document',
  description: 'Categories for organizing shop products',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
  ],
}); 