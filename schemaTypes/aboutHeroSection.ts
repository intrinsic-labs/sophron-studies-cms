import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutHeroSection',
  title: 'About Hero Section',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'rightImage',
      title: 'Right Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'leftImage',
      title: 'Left Image',
      type: 'image',
      options: {hotspot: true},
    }),
  ],
}) 