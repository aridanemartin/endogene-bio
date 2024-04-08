import { getPosts } from 'src/sanity/utils/sanity-querys'
import Headline from '@components/Headline/Headline'
import Hero from '@components/Hero/Hero'
import { CardSection } from '@components/CardSection/CardSection'
import Layout from '@components/Layout/Layout'
import PictureSection from '@components/PictureSection/PictureSection'
import HeroBannerImage from '../../_assets/pictures/endogenePrize.jpg'
import { useTranslation } from '../i18n'
import { PartnerLogos } from '@components/PartnerLogos/PartnerLogos'
import type { Metadata } from 'next'
import { Counter } from '@components/Counter/Counter'

export const metadata: Metadata = {
  title: 'Blog | Endogene.Bio',
  description: '',
}

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  const posts = await getPosts()
  const latestPosts = posts.slice(posts.length - 3, posts.length)

  return (
    <>
      <Hero lng={lng} />
      <Layout maxWidth="1100px">
        <Headline title="About Us" />
        <PictureSection
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          translationKey="HOME.intro"
          lng={lng}
        />
        <PartnerLogos />
        <Headline title={t('HOME.core-values.title')} />
        <CardSection t={t} />
        <Headline title={t('HOME.in-numbers')} />
        <Counter />
      </Layout>
    </>
  )
}
