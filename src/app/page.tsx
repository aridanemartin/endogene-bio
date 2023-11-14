import React from 'react'
import HeroTemplate from '@components/HeroTemplate/HeroTemplate'

import { getPosts } from 'src/sanity/utils/sanity-querys'
import { PostPreview } from '@components/PostPreview/PostPreview'
import Title from '@components/Title/Title'

interface indexProps {}

export default async function Home({}: indexProps) {
  const posts = await getPosts()
  const latestPosts = posts.slice(posts.length - 3, posts.length)

  return (
    <>
      <main className="main-layout">
        <HeroTemplate />
        <Title title="Latest Posts" />
        <div className="latestPosts">
          {latestPosts.map((post) => {
            return (
              <PostPreview
                key={post._id}
                post={post}
                link={`blog/${post.slug.current}`}
              />
            )
          })}
        </div>
      </main>
    </>
  )
}
