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
import Link from 'next/link'

export const PartnerLogos = () => {
  return (
    <section className="partnerLogos">
      <Link className="partnerLogoWrapper" href="https://www.genopole.com/">
        <Image
          src={genopoleLogo}
          alt="Partner Logos"
          width={100}
          height={100}
        />
      </Link>
      <Link className="partnerLogoWrapper" href="https://eit.europa.eu/">
        <Image
          src={eitLogo}
          alt="Partner Logos"
          width={100}
          height={100}
          style={{ filter: 'invert(1)' }}
        />
      </Link>
      <Link className="partnerLogoWrapper" href="https://frontline.vc/">
        <Image
          src={frontlineLogo}
          alt="Partner Logos"
          width={100}
          height={40}
        />
      </Link>
      <Link className="partnerLogoWrapper" href="https://stationf.co/">
        <Image
          src={stationFLogo}
          alt="Partner Logos"
          width={100}
          height={100}
        />
      </Link>
      <Link className="partnerLogoWrapper" href="https://www.bpifrance.com/">
        <Image src={bpiLogo} alt="Partner Logos" width={100} height={30} />
      </Link>
      <Link className="partnerLogoWrapper" href="https://www.joinef.com/">
        <Image
          src={entrepreneurFirstLogo}
          alt="Partner Logos"
          width={100}
          height={20}
        />
      </Link>
      <Link className="partnerLogoWrapper" href="https://www.inpi.fr/">
        <Image src={inpiLogo} alt="Partner Logos" width={50} height={40} />
      </Link>
    </section>
  )
}
