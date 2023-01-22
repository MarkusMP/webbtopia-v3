import Layout from '../components/global/Layout'
import {SiteMeta} from '../components/global/SiteMeta'
import RenderSections from '../components/RenderSections'
import {FooterPayload, HeaderPayload, PageData} from './types'

export function PageScreen(props: {
  data: PageData | null
  header: HeaderPayload
  footer: FooterPayload
}) {
  const {data, header, footer} = props

  return (
    <>
      <SiteMeta
        noIndex={!data?.indexPage ? false : data?.indexPage && true}
        title={data?.titleSEO}
        description={data?.descriptionSEO}
      />
      <Layout header={header} footer={footer}>
        {data?.content && <RenderSections sections={data.content} />}
      </Layout>
    </>
  )
}
