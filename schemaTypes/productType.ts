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
      validation: (Rule) => Rule.positive(), // Price must be positive when present
      description: 'Price in USD (leave empty for external products)',
    }),
    defineField({
      name: 'externalUrl',
      title: 'External Product URL',
      type: 'url',
      description: 'Link to external website where this product can be purchased (alternative to setting a price)',
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
      name: 'sizes',
      title: 'Available Sizes',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Optional: Add sizes for products like apparel (e.g., S, M, L, XL)',
      options: {
        list: [
          { title: 'Extra Small', value: 'XS' },
          { title: 'Small', value: 'S' },
          { title: 'Medium', value: 'M' },
          { title: 'Large', value: 'L' },
          { title: 'Extra Large', value: 'XL' },
          { title: 'XXL', value: 'XXL' },
        ],
      },
    }),
    // Add other fields as needed, e.g., categories, dimensions, weight for shipping, etc.
  ],
  validation: (Rule) => Rule.custom((doc: any) => {
    const hasPrice = doc?.price && doc.price > 0;
    const hasExternalUrl = doc?.externalUrl && doc.externalUrl.length > 0;
    
    if (hasPrice && hasExternalUrl) {
      return 'A product cannot have both a price and an external URL. Please choose one or the other.';
    }
    
    if (!hasPrice && !hasExternalUrl) {
      return 'A product must have either a price or an external URL.';
    }
    
    return true;
  }),
  preview: {
    select: {
      title: 'name',
      media: 'images.0.asset', // Show the first image in the preview
      isAvailable: 'isAvailable',
      price: 'price',
      externalUrl: 'externalUrl',
    },
    prepare(selection) {
      const { title, media, isAvailable, externalUrl } = selection
      let subtitle = '';
      
      if (!isAvailable) {
        subtitle = 'Hidden';
      } else if (externalUrl) {
        subtitle = 'External Product';
      } else {
        subtitle = 'Available';
      }
      
      return {
        title: title,
        subtitle: subtitle,
        media: media,
      }
    },
  },
})
