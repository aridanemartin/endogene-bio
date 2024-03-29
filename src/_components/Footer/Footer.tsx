import Link from 'next/link'
import './Footer.scss'

import { LinkedinIcon } from '@components/SocialIcon/LinkedinIcon'
import { TwitterIcon } from '@components/SocialIcon/TwitterIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
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

        <div className="footer__cita">
          <div className="footer__cita-text">
            <p>
              Pide tu cita en el teléfono{' '}
              <a href="tel:+34665859643">665859643</a> o pulsa en 'Concertar
              Cita' para contáctarme a través del formulario y empieza a
              cuidarte. <br />
            </p>
          </div>
          <div className="footer__cita-button">
            <Link href="/contacto" className="Button">
              Concertar cita
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__legal">
        <Link href="/legal/politica-de-cookies">Política de Cookies</Link>
        <Link href="/legal/politica-de-privacidad">Política de Privacidad</Link>
        <Link href="/legal/aviso-legal">Aviso Legal</Link>
      </div>
    </div>
  )
}
