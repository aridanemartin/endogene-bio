import { getPosts } from 'src/sanity/utils/sanity-querys'

import '@styles/Blog.scss'
import heroImage from '@assets/pictures/teamShape.webp'
import Header from '@components/Header/Header'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Endogene.Bio',
  description: '',
}

const Blog = async ({ params }) => {
  console.log('===params==>', params)
  const posts = await getPosts(params.lng)
  console.log('===posts==>', posts)

  return (
    <>
      <Header title="Blog" image={heroImage} />
      <div className="postsContainer">
        {/* <Headline
          titleKey="Artículos"
          subtitleKey="Te damos la bienvenida a nuestro blog, donde podrás obtener inspiración, consejos prácticos y la información más reciente sobre cómo mejorar tu bienestar a través de una alimentación saludable."
        /> */}
        {posts.length && posts.map((post) => <BlogPostPreview post={post} />)}
      </div>
    </>
  )
}

export default Blog
