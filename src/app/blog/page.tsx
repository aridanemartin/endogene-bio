import Link from 'next/link'
import { getPosts } from 'src/sanity/utils/sanity-querys'
import Post from './[slug]/page'
import { PostPreview } from '@components/PostPreview/PostPreview'
import '@styles/Blog.scss'

const Blog = async () => {
  const posts = await getPosts()

  return (
    <>
      <div className="postsContainer">
        {posts.length &&
          posts.map((post) => (
            <div className="postCard" key={post._id}>
              <PostPreview post={post} link={post.link} />
            </div>
          ))}
      </div>
    </>
  )
}

export default Blog
