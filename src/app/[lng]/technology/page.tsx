'use client'

import HeroBannerImage from '../../../_assets/pictures/technologyHeader.webp'
import Layout from '@components/Layout/Layout'
import { ImageHeader } from '@components/ImageHeader/ImageHeader'
import Headline from '@components/Headline/Headline'
import { useTranslation } from 'src/app/i18n/client'
import '../../../styles/TechnologyPage.css'
import Link from 'next/link'
import molecularBiology from '@assets/icons/molecularBiology.svg'
import Image from 'next/image'

const areas1 = [
  {
    image: `${molecularBiology.src}`,
    translationKey: 'endometriosis',
  },
  {
    image: `${molecularBiology.src}`,
    translationKey: 'endometrial-cancer',
  },
  {
    image: `${molecularBiology.src}`,
    translationKey: 'fertility',
  },
]

const areas2 = [
  {
    image: `${molecularBiology.src}`,
    translationKey: 'inmunology',
  },
  {
    image: `${molecularBiology.src}`,
    translationKey: 'cellular-biology',
  },
  {
    image: `${molecularBiology.src}`,
    translationKey: 'molecular-biology',
  },
  {
    image: `${molecularBiology.src}`,
    translationKey: 'ageing',
  },
]

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
        <section className="areasAndCapabilitiesSection">
          <article className="areasWrapper">
            <h3>Team Expertise Areas</h3>
            <div className="areas1">
              <ul>
                {areas1.map((area, index) => (
                  <li key={index} className="area">
                    <div className="areaIcon">
                      <Image src={area.image} alt={area.translationKey} fill />
                    </div>
                    <p>{t(`TECHNOLOGY.AREAS.${area.translationKey}`)}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="areas2">
              <ul>
                {areas2.map((area, index) => (
                  <li key={index} className="area">
                    <div className="areaIcon">
                      <Image src={area.image} alt={area.translationKey} fill />
                    </div>
                    <p>{t(`TECHNOLOGY.AREAS.${area.translationKey}`)}</p>
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className="capabilitiesWrapper">
            <h3>{t(`TECHNOLOGY.CAPABILITIES.title`)}</h3>
            <div className="capabilities">
              <ul>
                <li>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t(`TECHNOLOGY.CAPABILITIES.1`),
                    }}
                  />
                </li>
                <li>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t(`TECHNOLOGY.CAPABILITIES.2`),
                    }}
                  />
                </li>
                <li>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t(`TECHNOLOGY.CAPABILITIES.3`),
                    }}
                  />
                </li>
                <li>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t(`TECHNOLOGY.CAPABILITIES.4`),
                    }}
                  />
                </li>
                <li>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: t(`TECHNOLOGY.CAPABILITIES.5`),
                    }}
                  />
                </li>
              </ul>
            </div>
          </article>
        </section>
      </Layout>
    </>
  )
}

export default TechnologyPage
