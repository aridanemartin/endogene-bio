import Headline from '@components/Headline/Headline'
import { getTeamMembers } from 'src/sanity/utils/sanity-querys'
import { TeamSection } from '@components/TeamSection/TeamSection'
import Layout from '@components/Layout/Layout'
import '../../../styles/TeamPage.css'
import { sortTeamByPriority } from '@utils/sortTeamByPriority'

const TeamPage = async ({ params: { lng } }) => {
  const team = await getTeamMembers()
  const sortedTeamMembers = sortTeamByPriority(team)

  return (
    <Layout maxWidth="1100px" className="teamPage">
      <Headline lng={lng} titleKey="TEAM.title" />
      <TeamSection teamMembers={sortedTeamMembers} />
    </Layout>
  )
}

export default TeamPage
