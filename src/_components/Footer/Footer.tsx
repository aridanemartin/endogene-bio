import Link from 'next/link'
import './Footer.scss'

import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'
import { TwitterIcon } from '@components/SocialIcon/TwitterIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import footerLogo from '@assets/logos/endogeneLogo.svg'
import Image from 'next/image'

export default function Footer({ lng }) {
  return (
    <div className="footer">
      <div className="footer__content">
        <Link href={`/${lng}`} className="footer__logo">
          <Image
            src={footerLogo}
            alt="Endogene.Bio - Logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </Link>
        <div className="footer__socialIcons">
          <Link
            href="https://twitter.com/EndoGene_Bio"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <TwitterIcon color="#FFFFFF" />
            </div>
          </Link>
          <Link
            href="https://twitter.com/EndoGene_Bio"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <LinkedinIcon color="#FFFFFF" secondaryColor="#5e1e3c" />
            </div>
          </Link>

          <Link
            href="https://www.instagram.com/endogenebio/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <InstagramIcon color="#FFFFFF" />
            </div>
          </Link>
        </div>
      </div>
      <div className="footer__legal">
        <Link href="/terms-of-use">Terms of use</Link>
      </div>
    </div>
  )
}
