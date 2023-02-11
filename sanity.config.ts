import {documentInternationalization} from '@sanity/document-internationalization'
import {visionTool} from '@sanity/vision'
import {Config, defineConfig} from 'sanity'
import {media} from 'sanity-plugin-media'

import {dataset, projectId} from './src/sanity/env'
import {deskTool} from './src/sanity/lib/desk'
import {schema} from './src/sanity/schema'

export default defineConfig<Config>({
  basePath: '/studio',
  dataset,
  projectId,
  schema,
  title: 'Webbtopia',

  plugins: [
    deskTool(),
    visionTool(),
    media(),
    documentInternationalization({
      // Required, either:
      // An array of supported languages
      supportedLanguages: [
        {id: 'sv', title: 'Swedish (Svenska)'},
        {id: 'en', title: 'English'},
      ],
      // Required
      schemaTypes: [
        'home',
        'page',
        'notFound',
        'header',
        'footer',
        'work',
        'blog',
        'category',
        'technologyLinks',
        'redirects',
      ],
    }),
  ],
})
