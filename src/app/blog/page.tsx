import { getPosts } from 'src/sanity/utils/sanity-querys'

import '@styles/Blog.scss'
import heroImage from '@assets/pictures/blog3.jpg'
import Header from '@components/Header/Header'
import { BlogPostPreview } from '@components/BlogPostPreview/BlogPostPreview'
import Headline from '@components/Headline/Headline'

const Blog = async () => {
  const posts = await getPosts()

  return (
    <>
      <Header title="Blog" image={heroImage} />
      <div className="postsContainer">
        <Headline
          title="Artículos"
          subtitle="Te damos la bienvenida a nuestro blog, donde podrás obtener inspiración, consejos prácticos y la información más reciente sobre cómo mejorar tu bienestar a través de una alimentación saludable."
        />
        {posts.length && posts.map((post) => <BlogPostPreview post={post} />)}
      </div>
    </>
  )
}

export default Blog
