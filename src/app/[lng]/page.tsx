import { getTeamMembers } from 'src/sanity/utils/sanity-querys'
import Headline from '@components/Headline/Headline'
import { CardSection } from '@components/CardSection/CardSection'
import Layout from '@components/Layout/Layout'
import { useTranslation } from '../i18n'
import { PartnerLogos } from '@components/PartnerLogos/PartnerLogos'
import type { Metadata } from 'next'
import { Counter } from '@components/Counter/Counter'
import '../../styles/HomePage.css'
import VideoHero from '@components/VideoHero/VideoHero'


export const metadata: Metadata = {
  title: 'Endogene.Bio | Building a legacy in female health',
  description:
    'EndoGene.Bio is dedicated to molecular biomarker discovery in female health. We look at epigenetic markers in menstrual blood. Our first target is the development of non-invasive biomakers for better endometriosis diagnosis and management.',
}

export default async function Home({ params: { lng } }) {
  const { t } = await useTranslation(lng)
  const teamMembersInfo = await getTeamMembers()

  const counterTranslationsKeys = {
    team: t('HOME.counter.team'),
    scientists: t('HOME.counter.scientists'),
    languages: t('HOME.counter.languages'),
    femaleMale: t('HOME.counter.female-male'),
  }

  return (
    <>
      <Layout maxWidth="1000px" className="homePageLayout">
        <Headline titleKey="HOME.slogan" lng={lng} />
        <VideoHero />
        <Headline titleKey="HOME.our-values.title" lng={lng} />
        <CardSection t={t} />
        <Headline titleKey="HOME.trusted-by" lng={lng} headlineType="h2" />
        <PartnerLogos />
        <Headline titleKey="HOME.in-numbers" lng={lng} headlineType="h2" />
        <Counter
          translationKeys={counterTranslationsKeys}
          teamMembersInfo={teamMembersInfo}
        />
      </Layout>
    </>
  )
}
