'use client'

import HeroBannerImage from '../../../_assets/pictures/technologyHeader.webp'
import Layout from '@components/Layout/Layout'
import { ImageHeader } from '@components/ImageHeader/ImageHeader'
import Headline from '@components/Headline/Headline'
import { useTranslation } from 'src/app/i18n/client'
import '../../../styles/TechnologyPage.css'
import Link from 'next/link'

const TechnologyPage = ({ params: { lng } }) => {
  const { t } = useTranslation(lng)
  const introText = t('TECHNOLOGY.introText')

  return (
    <>
      <Layout maxWidth="1100px">
        <Headline lng={lng} titleKey="TECHNOLOGY.title" />
      </Layout>
      <ImageHeader
        alt="Technology"
        image={HeroBannerImage}
        width={3840}
        height={2191}
      />
      <Layout maxWidth="1100px" className="technologyPage">
        <section className="technologyIntroText">
          <p dangerouslySetInnerHTML={{ __html: introText }} />
        </section>
        <section className="linksSection">
          <h3>Are you...</h3>
          <div className="linksContainer">
            <Link className="link" href={`/${lng}/contact`}>
              Looking to develop/acquire a diagnostic test using menstrual
              blood?
            </Link>
            <Link className="link" href={`/${lng}/contact`}>
              Interested in finding a new target/drug candidate in female
              health?
            </Link>
          </div>
        </section>

        <Headline lng={lng} titleKey="TECHNOLOGY.title2" headlineType="h2" />
      </Layout>
    </>
  )
}

export default TechnologyPage
