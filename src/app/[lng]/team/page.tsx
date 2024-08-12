import Headline from '@components/Headline/Headline'
import { getTeamMembers } from 'src/sanity/utils/sanity-querys'
import { TeamSection } from '@components/TeamSection/TeamSection'
import Layout from '@components/Layout/Layout'
import '../../../styles/TeamPage.css'

const TeamPage = async ({ params: { lng } }) => {
  const team = await getTeamMembers()

  return (
    <Layout maxWidth="1100px" className="teamPage">
      <Headline lng={lng} titleKey="TEAM.title" />
      <TeamSection teamMembers={team} />
    </Layout>
  )
}

export default TeamPage
