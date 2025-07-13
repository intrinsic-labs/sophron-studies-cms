// sanity/schemaTypes/productType.ts
import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  description: 'Individual products for the shop',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }], // hotspot enables image cropping
      validation: (Rule) => Rule.required().min(1), // Require at least one image
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'blockContent', // Use your existing blockContent schema
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price ($)',
      type: 'number',
      validation: (Rule) => Rule.required().positive(), // Price must be positive
      description: 'Price in USD',
    }),
    defineField({
      name: 'isAvailable',
      title: 'Is Available?',
      type: 'boolean',
      description: 'Check this box if the product should be visible and purchasable on the site.',
      initialValue: true,
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
      description: 'Assign one or more categories for filtering products',
    }),
    defineField({
      name: 'weight',
      title: 'Weight (lbs)',
      type: 'number',
      description: 'Product weight in pounds for shipping calculations',
      validation: (Rule) => Rule.min(0.1).max(70), // USPS limits
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions (inches)',
      type: 'object',
      description: 'Product dimensions for shipping calculations',
      fields: [
        defineField({
          name: 'length',
          title: 'Length',
          type: 'number',
          validation: (Rule) => Rule.min(0.1),
        }),
        defineField({
          name: 'width',
          title: 'Width',
          type: 'number',
          validation: (Rule) => Rule.min(0.1),
        }),
        defineField({
          name: 'height',
          title: 'Height',
          type: 'number',
          validation: (Rule) => Rule.min(0.1),
        }),
      ],
    })
  ],
  preview: {
    select: {
      title: 'name',
      media: 'images.0.asset', // Show the first image in the preview
      isAvailable: 'isAvailable',
    },
    prepare(selection) {
      const { title, media, isAvailable } = selection
      return {
        title: title,
        subtitle: isAvailable ? 'Available' : 'Hidden',
        media: media,
      }
    },
  },
})
