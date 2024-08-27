import Link from 'next/link'
import './BlogPostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'
import svg1 from '@assets/shapes/blogShape1.svg'
import svg2 from '@assets/shapes/blogShape2.svg'
import svg3 from '@assets/shapes/blogShape3.svg'
import svg4 from '@assets/shapes/blogShape4.svg'

import { getFormattedDate } from '@utils/getFormattedDate'
import { useTranslation } from 'src/app/i18n'

export const BlogPostPreview = async ({ post, index, lng }) => {
  const { t } = await useTranslation(lng)
  const svgs = [svg1, svg2, svg3, svg4]
  const selectedSvg = svgs[index % svgs.length]
  const isOdd = index % 2 === 0

  const { month, year } = getFormattedDate(post.publishedAt)

  return (
    <Link key={post.slug} href={`blog/${post.slug}`}>
      <div
        className={`blogPostPreview${!isOdd ? ' reverse' : ''}`}
        key={post._id}
      >
        <div className="blogPostPreview__image">
          <div className="blogPostPreview__shape">
            <Image src={selectedSvg} alt="Blog shape" />
          </div>
          <div className="blogPostPreview__image-img">
            <Image
              src={post.mainImage}
              alt={enhanceAltDescription(post.title)}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
        <div className="blogPostPreview__text">
          <div className="blogPostPreview__titleWrapper">
            <p className="blogPostPreview__date">
              {t(`COMMON.months.${month}`)}, {year}
            </p>
            <h2 className="blogPostPreview__title" id={post.title}>
              {post.title}
            </h2>
          </div>

          <div
            className="blogPostPreview__description"
            aria-labelledby={post.title}
          >
            <p className="blogPostPreview__description-text">
              {post.description}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}
