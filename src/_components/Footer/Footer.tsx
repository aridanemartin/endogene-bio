import Link from 'next/link'
import './Footer.scss'

import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { WhatsappIcon } from '@components/SocialIcon/WhatsappIcon'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__socialIcons">
          <Link
            href="https://www.facebook.com/carolina.almeidaramirez"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <FacebookIcon color="#FFFFFF" />
            </div>
          </Link>
          <Link
            href="https://www.doctoralia.es/carolina-almeida-ramirez/dietista-nutricionista/las-palmas-de-gran-canaria"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <DoctoraliaIcon color="#FFFFFF" />
            </div>
          </Link>
          <Link
            href="https://www.instagram.com/conutricionsaludable/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <InstagramIcon color="#FFFFFF" />
            </div>
          </Link>
          <Link
            href="https://api.whatsapp.com/send?phone=34665859643"
            target="_blank"
            rel="noreferrer"
          >
            <div className="socialIcon">
              <WhatsappIcon color="#FFFFFF" />
            </div>
          </Link>
        </div>

        <div className="footer__cita">
          <div className="footer__cita-text">
            <p>
              Pide tu cita hoy mismo y empieza a cuidarte. <br />
            </p>
          </div>
          <div className="footer__cita-button">
            <Link href="/equipo" className="Button">
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
