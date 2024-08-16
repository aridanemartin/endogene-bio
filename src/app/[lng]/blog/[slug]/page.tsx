import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'
import { getPost } from 'src/sanity/utils/sanity-querys'
import '../../../../styles/BlogArticlePage.scss'
import SanityBlock from '@components/SanityBlock/SanityBlock'
import type { Metadata } from 'next'

import timeToReadIcon from '@assets/icons/time-to-read.webp'
import Layout from '@components/Layout/Layout'

type Props = {
  params: { slug: string; lng: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description, mainImage } = await getPost(
    params.slug,
    params.lng,
  )

  return {
    title: title,
    description: description,
    openGraph: {
      images: [mainImage],
    },
  }
}

export default async function Post({ params }: Props) {
  const { title, body, mainImage, timeToRead } = await getPost(
    params.slug,
    params.lng,
  )

  return (
    <>
      <div className="blogArticlePage">
        <div className="blogArticlePage__hero">
          <Image
            src={mainImage}
            className="blogArticlePage__hero-image"
            alt={enhanceAltDescription(title)}
            loading="eager"
            priority
            fill
            style={{
              objectFit: 'cover',
            }}
            quality={60}
          />
        </div>
        <section className="blogArticlePage__header">
          <h2 className="title">{title}</h2>
          <div className="subtitle">
            <div className="timeToRead">
              <div className="timeToRead__icon">
                <Image
                  src={timeToReadIcon}
                  alt="Time to read icon"
                  fill
                  style={{
                    objectFit: 'cover',
                  }}
                  quality={30}
                />
              </div>
              <p className="time">
                <em>{timeToRead} min de lectura</em>
              </p>
            </div>
          </div>
        </section>
      </div>
      <article className="contentWrapper">
        <Layout maxWidth="1000px" className="blogArticlePage__articleSection">
          {body.map((block) => (
            <>
              <SanityBlock key={block._key} sanityContent={block} />
            </>
          ))}
        </Layout>
        \
      </article>
    </>
  )
}
