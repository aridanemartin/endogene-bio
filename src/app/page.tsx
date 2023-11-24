import React from 'react'
import HeroTemplate from '@components/HeroTemplate/HeroTemplate'

import { getPosts } from 'src/sanity/utils/sanity-querys'
import { PostPreview } from '@components/PostPreview/PostPreview'
import Headline from '@components/Headline/Headline'
import { SectionsPreview } from '@components/SectionsPreview/SectionsPreview'

interface indexProps {}

export default async function Home({}: indexProps) {
  const posts = await getPosts()
  const latestPosts = posts.slice(posts.length - 3, posts.length)

  return (
    <>
      <main className="main-layout">
        <HeroTemplate />
        <Headline
          title="Servicios"
          subtitle="Descubre cómo la Nutrición Personalizada puede transformar tu bienestar en cada etapa de la vida. Complementa esto con nuestra Nutrición Clínica, que aborda condiciones como obesidad, diabetes y alergias con un enfoque integral."
        />
        {/* <SectionsPreview /> */}
        <Headline
          title="Últimos Posts"
          subtitle="Mantente al día con las tendencias en nutrición a través de nuestro blog. Descubre recetas innovadoras, consejos expertos y noticias sobre bienestar que te guiarán hacia un estilo de vida más saludable."
        />
        <div className="latestPosts">
          {latestPosts.map((post) => {
            return <PostPreview key={post._id} post={post} />
          })}
        </div>
      </main>
    </>
  )
}
