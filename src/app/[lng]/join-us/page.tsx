import Headline from '@components/Headline/Headline'
import Layout from '@components/Layout/Layout'
import { PageHeader } from '@components/PageHeader/PageHeader'
import { PositionsList } from '@components/PositionsList/PositionsList'
import React from 'react'
import { getPositions } from 'src/sanity/utils/sanity-querys'

const Page = async ({ params: { lng } }) => {
  const positions = await getPositions()

  return (
    <>
      <PageHeader />
      <Layout maxWidth="1100px">
        <Headline
          lng={lng}
          titleKey="JOIN-US.intro"
          headlineType="h4"
          styles={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
        />
        <PositionsList positions={positions} />
      </Layout>
    </>
  )
}

export default Page
