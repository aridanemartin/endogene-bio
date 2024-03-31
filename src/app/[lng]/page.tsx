'use client'

import { getPosts } from 'src/sanity/utils/sanity-querys'
import Headline from '@components/Headline/Headline'
import Hero from '@components/Hero/Hero'
import { CardSection } from '@components/CardSection/CardSection'
import Layout from '@components/Layout/Layout'
import PictureSection from '@components/PictureSection/PictureSection'
import HeroBannerImage from '../../_assets/pictures/endogenePrize.jpg'
import { useTranslation } from '../i18n'
import { Trans } from 'react-i18next'
import { PartnerLogos } from '@components/PartnerLogos/PartnerLogos'

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  const posts = await getPosts()
  const latestPosts = posts.slice(posts.length - 3, posts.length)

  return (
    <>
      <Hero
        textContent={
          <Trans
            t={t}
            i18nKey="HOME.slogan"
            defaults="Building a legacy in <strong>female health</strong>"
            components={{ strong: <strong /> }}
          />
        }
      />
      <Layout maxWidth="1100px">
        <Headline title={t('HOME.core-values')} />
        <CardSection />
        <PartnerLogos />

        <Headline title="Partners" />

        <PictureSection
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          text={<p>hola</p>}
        />
      </Layout>
    </>
  )
}
