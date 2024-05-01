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
        <Headline titleKey="HOME.about-us" lng={lng} />
        <PictureSection
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          translationKey="HOME.intro"
          lng={lng}
        />
        <PartnerLogos />
        <Headline titleKey="HOME.core-values.title" lng={lng} />
        <CardSection t={t} />
        <Headline titleKey="HOME.in-numbers" lng={lng} />
        <Counter />
      </Layout>
    </>
  )
}
