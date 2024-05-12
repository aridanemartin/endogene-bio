import Header from '@components/Header/Header'
import Headline from '@components/Headline/Headline'
import HeroBannerImage from '@assets/pictures/officeSharing.webp'
import firstSectionImage from '@assets/pictures/teamPrize.webp'
import secondSectionImage from '@assets/pictures/teamMeeting.webp'
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
          pictureSrc={firstSectionImage}
          translationKey="TEAM.intro1"
          lng={lng}
        />
        <PictureSection
          picturePosition="left"
          pictureSrc={secondSectionImage}
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
