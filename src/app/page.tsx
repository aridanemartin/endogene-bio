import HeroTemplate from '@components/HeroTemplate/HeroTemplate'

import { getPosts } from 'src/sanity/utils/sanity-querys'
import { PostPreview } from '@components/PostPreview/PostPreview'
import Headline from '@components/Headline/Headline'
import { NutritionSections } from '@components/NutritionSections/NutritionSections'
import HeroBanner from '@components/HeroBanner/HeroBanner'
import Hero from '@components/Hero/Hero'
import { CardSection } from '@components/CardSection/CardSection'
import Layout from '@components/Layout/Layout'
import PictureSection from '@components/PictureSection/PictureSection'
import HeroBannerImage from '../_assets/pictures/endogenePrize.jpg'

interface indexProps {}

export default async function Home({}: indexProps) {
  const posts = await getPosts()
  const latestPosts = posts.slice(posts.length - 3, posts.length)

  return (
    <>
      <Hero />
      <Layout maxWidth="1100px">
        <Headline title="Our core values" />
        <CardSection />
        <Headline title="Partners" />

        <PictureSection
          picturePosition="right"
          pictureSrc={HeroBannerImage}
          text={<p>hola</p>}
        />
      </Layout>
    </>
  )
}
