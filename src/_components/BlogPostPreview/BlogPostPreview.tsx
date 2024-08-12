import Link from 'next/link'
import './BlogPostPreview.scss'
import { enhanceAltDescription } from '@utils/enhanceAltDescription'
import Image from 'next/image'
import svg1 from '@assets/shapes/blogShape1.svg'
import svg2 from '@assets/shapes/blogShape2.svg'
import svg3 from '@assets/shapes/blogShape3.svg'
import svg4 from '@assets/shapes/blogShape4.svg'

export const BlogPostPreview = ({ post, index }) => {
  // Array of SVGs
  const svgs = [svg1, svg2, svg3, svg4]
  // Determine which SVG to use based on the index
  const selectedSvg = svgs[index % svgs.length]

  return (
    <Link key={post.slug} href={`blog/${post.slug}`}>
      <div className="blogPostPreview" key={post._id}>
        <div className="blogPostPreview__image">
          <div className="blogPostPreview__shape">
            <Image src={selectedSvg} alt="Blog shape" />
          </div>
          <Image
            className="blogPostPreview__image-img"
            src={post.mainImage}
            alt={enhanceAltDescription(post.title)}
            fill
          />
        </div>
        <div className="blogPostPreview__title">
          <h2 id={post.title}>{post.title}</h2>
        </div>
        <section
          className="blogPostPreview__description"
          aria-labelledby={post.title}
        >
          <p className="blogPostPreview__description-text">
            {post.description}
          </p>
        </section>
      </div>
    </Link>
  )
}
