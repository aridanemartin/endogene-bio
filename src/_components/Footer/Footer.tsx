import Image from 'next/image'
import Link from 'next/link'
import './Footer.scss'

// import mainLogo from '@assets/logos/carolinaLogoTransparent.png'
import facebookIcon from '@assets/icons/facebookIcon.svg'
import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <ul className="footer__links">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/equipo/dr-julian-tamayo">Conóceme</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/equipo">Equipo</Link>
          </li>
          <li>
            <Link href="/">Contacto</Link>
          </li>
        </ul>

        <div className="socialWrapper">
          {/* <div className="logoWrap">
            <Image
              src={mainLogo}
              fill
              quality={25}
              alt="Julián Tamayo - Endocrino en Las Palmas | Firma Corta"
            />
          </div> */}
          <div className="socialContainer">
            <Link
              href="https://www.facebook.com/juliantamayoendocrino/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <FacebookIcon />
              </div>
            </Link>
            <Link
              href="https://www.doctoralia.es/carolina-almeida-ramirez/dietista-nutricionista/las-palmas-de-gran-canaria"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <DoctoraliaIcon />
              </div>
            </Link>
            <Link
              href="https://www.instagram.com/conutricionsaludable/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="socialIcon">
                <InstagramIcon />
              </div>
            </Link>
          </div>
        </div>
        <div className="citaWrap">
          <div className="citaText">
            <p>
              Pide tu cita hoy mismo y empieza a cuidarte. <br />
            </p>
          </div>
          <div className="citaButtons">
            <Link href="/equipo" className="Button">
              Concertar cita
            </Link>
          </div>
        </div>
      </div>
      <div className="legal">
        <Link href="/legal/politica-de-cookies">Política de Cookies</Link>
        <Link href="/legal/politica-de-privacidad">Política de Privacidad</Link>
        <Link href="/legal/aviso-legal">Aviso Legal</Link>
      </div>
    </div>
  )
}
