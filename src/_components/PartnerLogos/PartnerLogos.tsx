import Image from 'next/image'
import React from 'react'
import eitLogo from '@assets/logos/eitLogo.svg'
import frontlineLogo from '@assets/logos/FrontlineLogo.webp'
import genopoleLogo from '@assets/logos/genopoleLogo.svg'
import stationFLogo from '@assets/logos/stationfLogo.svg'
import bpiLogo from '@assets/logos/bpi.webp'
import inpiLogo from '@assets/logos/inpi.webp'
import entrepreneurFirstLogo from '@assets/logos/entrepreneur-first.webp'
import './PartnerLogos.css'

export const PartnerLogos = () => {
  return (
    <section className="partnerLogos">
      <div className="partnerLogoWrapper">
        <Image
          src={genopoleLogo}
          alt="Partner Logos"
          width={100}
          height={100}
        />
      </div>
      <div className="partnerLogoWrapper">
        <Image
          src={eitLogo}
          alt="Partner Logos"
          width={100}
          height={100}
          style={{ filter: 'invert(1)' }}
        />
      </div>
      <div className="partnerLogoWrapper">
        <Image
          src={frontlineLogo}
          alt="Partner Logos"
          width={100}
          height={40}
        />
      </div>
      <div className="partnerLogoWrapper">
        <Image
          src={stationFLogo}
          alt="Partner Logos"
          width={100}
          height={100}
        />
      </div>
      <div className="partnerLogoWrapper">
        <Image src={bpiLogo} alt="Partner Logos" width={100} height={30} />
      </div>
      <div className="partnerLogoWrapper">
        <Image
          src={entrepreneurFirstLogo}
          alt="Partner Logos"
          width={100}
          height={20}
        />
      </div>
      <div className="partnerLogoWrapper">
        <Image src={inpiLogo} alt="Partner Logos" width={50} height={40} />
      </div>
    </section>
  )
}
