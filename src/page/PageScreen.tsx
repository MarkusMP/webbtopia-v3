import Layout from '../components/global/Layout'
import {SiteMeta} from '../components/global/SiteMeta'
import RenderSections from '../components/RenderSections'
import {urlForImage} from '../sanity/lib/sanity.image'
import {FooterPayload, HeaderPayload, PageData} from './types'

export function PageScreen(props: {
  data: PageData | null
  header: HeaderPayload
  footer: FooterPayload
  canonical?: string | null
}) {
  const {data, header, footer, canonical} = props

  const ogImage = data?.ogImage && urlForImage(data.ogImage as any)?.url()

  return (
    <>
      <SiteMeta
        noIndex={!data?.indexPage ? false : data.indexPage === true ? true : false}
        title={data?.titleSEO}
        description={data?.descriptionSEO}
        ogImage={ogImage}
        canonical={canonical}
      />
      <Layout header={header} footer={footer}>
        {data?.content && <RenderSections sections={data.content} />}
      </Layout>
    </>
  )
}
