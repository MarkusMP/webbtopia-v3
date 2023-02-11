import {
  ArchiveIcon,
  BlockContentIcon,
  ClipboardImageIcon,
  DocumentIcon,
  DocumentsIcon,
  HomeIcon,
  LinkIcon,
  MenuIcon,
  UploadIcon,
  WarningOutlineIcon,
} from '@sanity/icons'
import {definePlugin, DocumentOptions, DocumentPluginOptions} from 'sanity'
import {deskTool as baseDeskTool} from 'sanity/desk'
import {DefaultDocumentNodeResolver} from 'sanity/desk'

/**
 * A modified version of Sanity’s desk tool.
 *
 * - Adds a default document node resolver that uses the `views` option on schema types.
 * - Adds a default production URL resolver that uses the `url` option on schema types.
 */
export const deskTool = definePlugin(() => {
  const {name: _, ...base} = baseDeskTool({
    defaultDocumentNode,
    structure: (S) =>
      S.list()
        .title('Content')
        .items([
          S.listItem()
            .title('Home')
            .icon(HomeIcon)
            .child(
              S.list()
                .title('Home page language filter')
                .items([
                  S.listItem()
                    .title('All home documents')
                    .child(
                      S.documentList()
                        .title(`Home documents`)
                        .schemaType('home')
                        .filter('_type == "home"')
                    ),
                  S.listItem()
                    .title('Home page in English')
                    .child(
                      S.documentList()
                        .title(`Home documents`)
                        .schemaType('home')
                        .filter('_type == "home" && language == "en"')
                    ),
                  S.listItem()
                    .title('Home page in Swedish')
                    .child(
                      S.documentList()
                        .title(`Home documents`)
                        .schemaType('home')
                        .filter('_type == "home" && language == "sv"')
                    ),
                ])
            ),
          S.listItem()
            .title('404')
            .icon(WarningOutlineIcon)
            .child(
              S.list()
                .title('404 page language filter')
                .items([
                  S.listItem()
                    .title('All 404 documents')
                    .child(
                      S.documentList()
                        .title(`404 page documents`)
                        .schemaType('notFound')
                        .filter('_type == "notFound"')
                    ),
                  S.listItem()
                    .title('404 page in English')
                    .child(
                      S.documentList()
                        .title(`404 page documents`)
                        .schemaType('notFound')
                        .filter('_type == "notFound" && language == "en"')
                    ),
                  S.listItem()
                    .title('404 page in Swedish')
                    .child(
                      S.documentList()
                        .title(`404 page documents`)
                        .schemaType('notFound')
                        .filter('_type == "notFound" && language == "sv"')
                    ),
                ])
            ),
          S.listItem()
            .title('Pages')
            .icon(DocumentIcon)
            .child(
              S.list()
                .title('Pages language filter')
                .items([
                  S.listItem()
                    .title('All pages documents')
                    .child(
                      S.documentList()
                        .title(`pages documents`)
                        .schemaType('page')
                        .filter('_type == "page"')
                    ),
                  S.listItem()
                    .title('Pages in English')
                    .child(
                      S.documentList()
                        .title(`pages documents`)
                        .schemaType('page')
                        .filter('_type == "page" && language == "en"')
                    ),
                  S.listItem()
                    .title('Pages in Swedish')
                    .child(
                      S.documentList()
                        .title(`pages documents`)
                        .schemaType('page')
                        .filter('_type == "page" && language == "sv"')
                    ),
                ])
            ),
          S.divider(),
          S.listItem()
            .title('Blog')
            .icon(BlockContentIcon)
            .child(
              S.list()
                .title('Blogs language filter')
                .items([
                  S.listItem()
                    .title('All blogs documents')
                    .child(
                      S.documentList()
                        .title(`All blog documents`)
                        .schemaType('blog')
                        .filter('_type == "blog"')
                    ),
                  S.listItem()
                    .title('Blogs in English')
                    .child(
                      S.documentList()
                        .title(`Blog documents`)
                        .schemaType('blog')
                        .filter('_type == "blog" && language == "en"')
                    ),
                  S.listItem()
                    .title('Blogs in Swedish')
                    .child(
                      S.documentList()
                        .title(`Blog documents`)
                        .schemaType('blog')
                        .filter('_type == "blog" && language == "sv"')
                    ),
                ])
            ),
          S.listItem()
            .title('Categories')
            .icon(ClipboardImageIcon)
            .child(
              S.list()
                .title('Categories language filter')
                .items([
                  S.listItem()
                    .title('All categories documents')
                    .child(
                      S.documentList()
                        .title(`All category documents`)
                        .schemaType('category')
                        .filter('_type == "category"')
                    ),
                  S.listItem()
                    .title('Categories in English')
                    .child(
                      S.documentList()
                        .title(`Category documents`)
                        .schemaType('category')
                        .filter('_type == "category" && language == "en"')
                    ),
                  S.listItem()
                    .title('Categories in Swedish')
                    .child(
                      S.documentList()
                        .title(`Category documents`)
                        .schemaType('category')
                        .filter('_type == "category" && language == "sv"')
                    ),
                ])
            ),
          S.divider(),
          S.listItem()
            .title('Redirects')
            .icon(LinkIcon)
            .child(
              S.list()
                .title('Redirects language filter')
                .items([
                  S.listItem()
                    .title('All redirects documents')
                    .child(
                      S.documentList()
                        .title(`Redirects documents`)
                        .schemaType('redirects')
                        .filter('_type == "redirects"')
                    ),
                  S.listItem()
                    .title('Redirects documents in English')
                    .child(
                      S.documentList()
                        .title(`Redirects documents`)
                        .schemaType('redirects')
                        .filter('_type == "redirects" && language == "en"')
                    ),
                  S.listItem()
                    .title('Redirects documents in Swedish')
                    .child(
                      S.documentList()
                        .title(`Redirects documents`)
                        .schemaType('redirects')
                        .filter('_type == "redirects" && language == "sv"')
                    ),
                ])
            ),
          S.divider(),
          S.listItem()
            .title('work')
            .icon(DocumentsIcon)
            .child(
              S.list()
                .title('Work language filter')
                .items([
                  S.listItem()
                    .title('All work documents')
                    .child(
                      S.documentList()
                        .title(`Work documents`)
                        .schemaType('work')
                        .filter('_type == "work"')
                    ),
                  S.listItem()
                    .title('Work documents in English')
                    .child(
                      S.documentList()
                        .title(`Work documents`)
                        .schemaType('work')
                        .filter('_type == "work" && language == "en"')
                    ),
                  S.listItem()
                    .title('Work documents in Swedish')
                    .child(
                      S.documentList()
                        .title(`Work documents`)
                        .schemaType('work')
                        .filter('_type == "work" && language == "sv"')
                    ),
                ])
            ),
          S.listItem()
            .title('Technology Links')
            .icon(ArchiveIcon)
            .child(
              S.list()
                .title('Technology links language filter')
                .items([
                  S.listItem()
                    .title('All technology links documents')
                    .child(
                      S.documentList()
                        .title(`Technology links documents`)
                        .schemaType('technologyLinks')
                        .filter('_type == "technologyLinks"')
                    ),
                  S.listItem()
                    .title('Technology links documents in English')
                    .child(
                      S.documentList()
                        .title(`Technology links documents`)
                        .schemaType('technologyLinks')
                        .filter('_type == "technologyLinks" && language == "en"')
                    ),
                  S.listItem()
                    .title('Technology links documents in Swedish')
                    .child(
                      S.documentList()
                        .title(`Technology links documents`)
                        .schemaType('technologyLinks')
                        .filter('_type == "technologyLinks" && language == "sv"')
                    ),
                ])
            ),
          S.divider(),

          S.listItem()
            .title('Header')
            .icon(MenuIcon)
            .child(
              S.list()
                .title('Header language filter')
                .items([
                  S.listItem()
                    .title('All header documents')
                    .child(
                      S.documentList()
                        .title(`Header documents`)
                        .schemaType('header')
                        .filter('_type == "header"')
                    ),
                  S.listItem()
                    .title('Headers in English')
                    .child(
                      S.documentList()
                        .title(`Headers documents`)
                        .schemaType('header')
                        .filter('_type == "header" && language == "en"')
                    ),
                  S.listItem()
                    .title('Headers in Swedish')
                    .child(
                      S.documentList()
                        .title(`Headers documents`)
                        .schemaType('header')
                        .filter('_type == "header" && language == "sv"')
                    ),
                ])
            ),
          S.listItem()
            .title('Footer')
            .icon(UploadIcon)
            .child(
              S.list()
                .title('Footer language filter')
                .items([
                  S.listItem()
                    .title('All footer documents')
                    .child(
                      S.documentList()
                        .title(`Footer documents`)
                        .schemaType('footer')
                        .filter('_type == "footer"')
                    ),
                  S.listItem()
                    .title('footers in English')
                    .child(
                      S.documentList()
                        .title(`Footers documents`)
                        .schemaType('footer')
                        .filter('_type == "footer" && language == "en"')
                    ),
                  S.listItem()
                    .title('Footers in Swedish')
                    .child(
                      S.documentList()
                        .title(`Footers documents`)
                        .schemaType('footer')
                        .filter('_type == "footer" && language == "sv"')
                    ),
                ])
            ),
        ]),
  })

  return {
    name: 'lib/desk/deskTool',
    ...base,
    document: {
      ...base.document,
      productionUrl,
    },
  }
})

const defaultDocumentNode: DefaultDocumentNodeResolver = (S, ctx: any) => {
  const schemaType = ctx.schema.get(ctx.schemaType)
  const schemaOptions: DocumentOptions | undefined = schemaType?.options
  const viewsResolver = schemaOptions?.views

  if (viewsResolver) {
    return S.document().views(viewsResolver(S, ctx))
  }

  return S.document()
}

const productionUrl: DocumentPluginOptions['productionUrl'] = async (prev, ctx) => {
  const schemaType = ctx.schema.get(ctx.document._type)
  const schemaOptions: DocumentOptions | undefined = schemaType?.options
  const urlResolver = schemaOptions?.url

  if (urlResolver) {
    return (await urlResolver(ctx)) ?? prev
  }

  return prev
}
