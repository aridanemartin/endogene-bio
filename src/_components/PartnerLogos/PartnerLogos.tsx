import Image from 'next/image'
import React from 'react'
import eitLogo from '@assets/logos/eitLogo.svg'
import frontlineLogo from '@assets/logos/FrontlineLogo.webp'
import genopoleLogo from '@assets/logos/genopoleLogo.svg'
import stationFLogo from '@assets/logos/stationfLogo.svg'
import './PartnerLogos.css'

export const PartnerLogos = () => {
  return (
    <section>
      <p className="partnerText">Trusted by companies like</p>
      <article className="partnerLogos">
        <Image
          src={genopoleLogo}
          alt="Partner Logos"
          width={100}
          height={100}
        />
        <Image
          src={eitLogo}
          alt="Partner Logos"
          width={100}
          height={100}
          style={{ filter: 'invert(1)' }}
        />
        <Image
          src={frontlineLogo}
          alt="Partner Logos"
          width={100}
          height={40}
        />
        <Image
          src={stationFLogo}
          alt="Partner Logos"
          width={100}
          height={100}
        />
      </article>
    </section>
  )
}
