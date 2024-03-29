import Header from '@components/Header/Header'
import Headline from '@components/Headline/Headline'
import HeroBannerImage from '../../_assets/pictures/teamStock.jpg'
import { getTeamMembers } from 'src/sanity/utils/sanity-querys'
import { TeamSection } from '@components/TeamSection/TeamSection'
import Layout from '@components/Layout/Layout'

const TeamPage = async () => {
  const team = await getTeamMembers()
  console.log('===team==>', team)

  return (
    <div>
      <Header title="Team" image={HeroBannerImage} />
      <Headline title="Team" />
      <Layout maxWidth="1100px">
        <TeamSection teamMembers={team} />
      </Layout>
    </div>
  )
}

export default TeamPage
