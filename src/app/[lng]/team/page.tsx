import Header from '@components/Header/Header'
import Headline from '@components/Headline/Headline'
import HeroBannerImage from '@assets/pictures/endogeneTeam3.jpg'
import { getTeamMembers } from 'src/sanity/utils/sanity-querys'
import { TeamSection } from '@components/TeamSection/TeamSection'
import Layout from '@components/Layout/Layout'
import PictureSection from '@components/PictureSection/PictureSection'

const TeamPage = async ({ params: { lng } }) => {
  const team = await getTeamMembers()

  return (
    <div>
      <Header title="Team" image={HeroBannerImage} />
      <Layout maxWidth="1100px">
        <PictureSection
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          translationKey="TEAM.intro1"
          lng={lng}
        />
        <PictureSection
          picturePosition="left"
          pictureSrc={HeroBannerImage}
          translationKey="TEAM.intro2"
          lng={lng}
        />
        <Headline lng={lng} titleKey="TEAM.title" />
        <TeamSection teamMembers={team} />
      </Layout>
    </div>
  )
}

export default TeamPage
