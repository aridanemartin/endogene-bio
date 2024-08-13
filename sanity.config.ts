import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from './src/sanity/schemas'
import { I18nFields } from 'sanity-plugin-i18n-fields'

export default defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  title: 'endogene.bio',
  apiVersion: '2023-03-09',
  plugins: [
    deskTool(),
    visionTool(),
    I18nFields({
      locales: [
        { code: 'en', label: 'EN', title: 'English', default: true },
        { code: 'fr', label: 'FR', title: 'French' },
        { code: 'es', label: 'ES', title: 'Spanish' },
      ],
    }),
  ],
  schema: { types: schemas },
})
