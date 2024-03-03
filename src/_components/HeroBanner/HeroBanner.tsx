import React from 'react'
import './HeroBanner.scss'
import firma from '../../_assets/logos/firmaCarolina2.webp'
import Image from 'next/image'

interface HeroBannerProps {
  description: string
  buttonComponent: React.ReactNode
}

const HeroBanner = ({ description, buttonComponent }: HeroBannerProps) => {
  return (
    <div className="heroBanner">
      <div className="heroBanner__content">
        <div className="heroBanner__signature">
          <Image
            src={firma}
            alt="Carolina Almeida - Nutricionista / Dietista en Las Palmas - Firma"
            layout="fill"
            style={{ objectFit: 'contain' }}
            quality={50}
          />
        </div>
        {/* <p className="heroBanner__description">{description}</p> */}
        <p className="heroBanner__description">
          Diestista-Nutricionista
          <br /> en Las Palmas de Gran Canaria
        </p>
        {/* {buttonComponent} */}
      </div>
    </div>
  )
}

export default HeroBanner
