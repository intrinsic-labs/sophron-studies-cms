import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sophron-studies',

  projectId: 'o1brandp',
  dataset: 'private',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
