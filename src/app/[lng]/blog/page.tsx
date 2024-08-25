import { getPosts } from 'src/sanity/utils/sanity-querys'

import '@styles/Blog.scss'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'
import type { Metadata } from 'next'
import Layout from '@components/Layout/Layout'
import { removePostsWithEmptyFields } from '@utils/removePostsWithEmptyFields'
import { NotFoundComponent } from '@components/NotFoundComponent/NotFoundComponent'

export const metadata: Metadata = {
  title: 'Blog | Endogene.Bio',
  description: '',
}

const Blog = async ({ params }) => {
  const posts = await getPosts(params.lng)
  const filteredPosts = removePostsWithEmptyFields(posts)

  if (filteredPosts.length === 0) {
    return <NotFoundComponent locale={params.lng} isBlogPage />
  }

  return (
    <Layout maxWidth="900px" className="blogPage">
      <Headline lng={params.lng} titleKey="BLOG.title" />
      <div className="postsContainer">
        {filteredPosts.map((post, idx) => (
          <BlogPostPreview post={post} index={idx} lng={params.lng} />
        ))}
      </div>
    </Layout>
  )
}

export default Blog
