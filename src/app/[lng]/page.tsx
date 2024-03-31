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
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Carolina Almeida Nutricionista Dietista',
  description:
    'Carolina Almeida, Dietista Nutricionista en Las Palmas, colegiada en CODINUISCAN, con más de 15 años de experiencia. Especializada en mejorar hábitos alimenticios, planificación de menús y tratamiento de patologías. ¡Prioriza tu bienestar hoy!',
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
        <Headline title={t('HOME.core-values')} />
        <CardSection />
      </Layout>
    </>
  )
}
