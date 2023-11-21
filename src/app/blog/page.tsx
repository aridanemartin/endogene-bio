import { getPosts } from 'src/sanity/utils/sanity-querys'

import { PostPreview } from '@components/PostPreview/PostPreview'
import '@styles/Blog.scss'
import heroImage from '@assets/pictures/blog3.jpg'
import Header from '@components/Header/Header'

const Blog = async () => {
  const posts = await getPosts()

  return (
    <>
      <Header title="Blog" image={heroImage} />
      <div className="postsContainer">
        {posts.length &&
          posts.map((post) => (
            <div className="postCard" key={post._id}>
              <PostPreview post={post} />
            </div>
          ))}
      </div>
    </>
  )
}

export default Blog
