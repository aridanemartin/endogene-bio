import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'
import Link from 'next/link'
import { getPost } from 'src/sanity/utils/sanity-querys'
import '../../../styles/BlogArticlePage.scss'
import SanityBlock from '@components/SanityBlock/SanityBlock'

import CarolinaProfileImage from '@assets/pictures/carolinaProfileSquare.jpg'
import timeToReadIcon from '@assets/icons/time-to-read.png'
import Layout from '@components/Layout/Layout'

type Props = {
  params: { slug: string }
}

export default async function Post({ params }: Props) {
  console.log('====>', params.slug)
  const { title, description, body, mainImage, author, timeToRead } =
    await getPost(params.slug)

  // console.log(title, description, mainImage, author, timeToRead)

  return (
    <>
      {/* <Meta
        title={`${data.title} | ${data.author.name}`}
        desc={`${data.author.description}`}
        canonical={`https://www.juliantamayo.com/blog/${data.author.slug.current}`}
        image={mainImageProps?.src}
      /> */}
      <div className="blogArticlePage">
        <div className="blogArticlePage__hero">
          <Image
            src={mainImage}
            className="blogArticlePage__hero-image"
            alt={enhanceAltDescription(title + ' | ' + author)}
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
            <div className="author">
              <div className="author__text">
                <p className="name">{author}</p>
              </div>
              <div className="author__image">
                <Image
                  src={CarolinaProfileImage}
                  alt={`${author} - Foto de Perfil`}
                  fill
                  quality={25}
                  sizes="100vw"
                  style={{
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>

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
        <Layout maxWidth="1000px">
          {body.map((block) => (
            <>
              <SanityBlock key={block._key} sanityContent={block} />
            </>
          ))}
        </Layout>
      </article>
    </>
  )
}
