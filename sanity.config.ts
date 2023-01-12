import {visionTool} from '@sanity/vision'
import {Config, defineConfig} from 'sanity'
import {documentInternationalization} from '@sanity/document-internationalization'

import {dataset, projectId} from './src/sanity/env'
import {deskTool} from './src/sanity/lib/desk'
import {schema} from './src/sanity/schema'

export default defineConfig<Config>({
  basePath: '/studio',
  dataset,
  projectId,
  schema,
  title: 'Next.js Template',

  plugins: [
    deskTool(),
    visionTool(),
    documentInternationalization({
      // Required, either:
      // An array of supported languages
      supportedLanguages: [
        {id: 'sv', title: 'Swedish (Svenska)'},
        {id: 'en', title: 'English'},
      ],
      // Required
      schemaTypes: ['home', 'page', 'notFound'],
    }),
  ],
})
