import Headline from '@components/Headline/Headline'
import Layout from '@components/Layout/Layout'
import { PageHeader } from '@components/PageHeader/PageHeader'
import { PositionsList } from '@components/PositionsList/PositionsList'
import React from 'react'
import { getPositions } from 'src/sanity/utils/sanity-querys'

const Page = async () => {
  const positions = await getPositions()
  console.log('===positions==>', positions)

  return (
    <>
      <PageHeader />
      <Layout maxWidth="1100px">
        <Headline
          title="Our team is growing. We need passionate people who want to make an impact on the future of food. Check out our vacancies and apply now."
          headlineType="h4"
          styles={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}
        />
        <PositionsList positions={positions} />
      </Layout>
    </>
  )
}

export default Page
