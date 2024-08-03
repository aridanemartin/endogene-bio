import { getPosts } from 'src/sanity/utils/sanity-querys'

import '@styles/Blog.scss'
import heroImage from '@assets/pictures/labBanner.webp'
import Header from '@components/Header/Header'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'
import type { Metadata } from 'next'
import Layout from '@components/Layout/Layout'

export const metadata: Metadata = {
  title: 'Blog | Endogene.Bio',
  description: '',
}

const Blog = async ({ params }) => {
  const posts = await getPosts(params.lng)

  return (
    <Layout maxWidth="1100px" className="blogPage">
      <Headline lng={params.lng} titleKey="BLOG.title" />
      <div className="postsContainer">
        {posts.length && posts.map((post) => <BlogPostPreview post={post} />)}
      </div>
    </Layout>
  )
}

export default Blog
