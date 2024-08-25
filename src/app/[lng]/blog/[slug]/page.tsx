import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'
import { getPost } from 'src/sanity/utils/sanity-querys'
import '../../../../styles/BlogArticlePage.scss'
import SanityBlock from '@components/SanityBlock/SanityBlock'
import type { Metadata } from 'next'

import timeToReadIcon from '@assets/icons/time-to-read.webp'
import Layout from '@components/Layout/Layout'
import { getFormattedDate } from '@utils/getFormattedDate'
import { useTranslation } from 'src/app/i18n'

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
  const { title, body, mainImage, timeToRead, _createdAt } = await getPost(
    params.slug,
    params.lng,
  )
  const { t } = await useTranslation(params.lng)
  const { month, year } = getFormattedDate(_createdAt)

  return (
    <>
      <div className="blogArticlePage">
        <div className="blogArticlePage__hero" style={{ filter: 'blur(5px)' }}>
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
            quality={100}
          />
        </div>
        <section className="blogArticlePage__header">
          <h2 className="title">{title}</h2>
          <div className="subtitle">
            <div className="timeToRead">
              <p className="date">
                <em>
                  {t(`COMMON.months.${month}`)}, {year}
                </em>{' '}
              </p>
              |{' '}
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
                <em>
                  {timeToRead} {t(`ARTICLE-PAGE.time-to-read`)}
                </em>
              </p>
            </div>
          </div>
        </section>
      </div>
      <article className="contentWrapper">
        <Layout maxWidth="1000px" className="blogArticlePage__articleSection">
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: '20rem',
            }}
          >
            <Image
              src={mainImage}
              className="blogArticlePage__main-image"
              alt={enhanceAltDescription(title)}
              loading="eager"
              priority
              fill
              style={{
                objectFit: 'cover',
              }}
              quality={100}
            />
          </div>
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
