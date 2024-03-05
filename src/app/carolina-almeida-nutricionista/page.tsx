import React from 'react'
import '@styles/About.scss'
import heroImage from '@assets/pictures/carolinaProfileSquare.webp'
import Image from 'next/image'
import esdenLogo from '@assets/logos/esdenLogo.webp'
import codinuscanLogo from '@assets/logos/codinuscanLogo.webp'
import complutenseLogo from '@assets/logos/complutenseLogo2.webp'
import universidadDeNavarraLogo from '@assets/logos/universidadDeNavarraLogo.webp'
import { SocialIcons } from '@components/SocialIcons/SocialIcons'
import { FacebookIcon } from '@components/SocialIcon/FacebookIcon'
import { InstagramIcon } from '@components/SocialIcon/InstagramIcon'
import { DoctoraliaIcon } from '@components/SocialIcon/DoctoraliaIcon'
import { WhatsappIcon } from '@components/SocialIcon/WhatsappIcon'
import type { Metadata } from 'next'

const socialLinks = [
  {
    href: 'https://www.facebook.com/carolina.almeidaramirez',
    icon: <FacebookIcon />,
  },
  {
    href: 'https://www.instagram.com/conutricionsaludable/',
    icon: <InstagramIcon />,
  },
  {
    href: 'https://www.doctoralia.es/carolina-almeida-ramirez/dietista-nutricionista/las-palmas-de-gran-canaria',
    icon: <DoctoraliaIcon />,
  },
  {
    href: 'https://api.whatsapp.com/send?phone=34665859643',
    icon: <WhatsappIcon color="#FFFFFF" />,
  },
]

export const metadata: Metadata = {
  title: 'Sobre mi | Carolina Almeida Nutricionista',
  description:
    'Carolina Almeida, Diplomada en Nutrición Humana y Dietética. Colegiada en el Colegio de Dietistas-Nutricionistas de las Islas Canarias CODINUISCAN.',
}

export default function About() {
  return (
    <div className="about__background">
      <div className="about">
        <section className="about__profile">
          <div className="about__profile-image">
            <Image
              src={heroImage}
              alt="hero"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className="about__profile-text">
            <h1>Carolina Almeida</h1>
            <h2>Dietista-Nutricionista y Tecnóloga de Alimentos</h2>
            <button>Concertar Cita</button>
            <p>
              Dietista-Nutricionista y Tecnóloga de Alimentos NºColegiada
              IC-00004
            </p>
          </div>
          <div className="about__social">
            <SocialIcons socialLinks={socialLinks} />
          </div>
        </section>
        <section className="about__content">
          <div>
            <h2 className="about__content-title">Sobre mi</h2>
            <p className="about__content-text">
              Soy Carolina Almeida, Diplomada en Nutrición Humana y Dietética.
              Colegiada en el Colegio de Dietistas-Nutricionistas de las Islas
              Canarias CODINUISCAN.
              <br />
              <br />
              Obtuve un postgrado en Obesidad por la Universidad de Navarra.
              También soy Licenciada en Ciencia y Tecnología de los Alimentos
              por la Universidad Complutense de Madrid. Máster en Tecnología y
              Gestión de la Calidad en la Industria Agroalimentaria por la
              Esden. Con una larga trayectoria profesional, más de 15 años de
              experiencia en clínicas de Canarias, tanto en consultas como en
              Nutrición Clínica y en sector de la restauración colectiva
              elaborando menús para diferentes etapas de la vida, atendiendo
              alergias, intolerancias y/o patologías.
              <br />
              <br />
              Te puedo ayudar si quieres conseguir mejores hábitos de
              alimentación, planificar tu menús semanales, mejorar tu
              composición corporal o si tienes alguna patología digestiva,
              hepática, inf.renal...
              <br />
              <br />
              Te puedo ayudar si quieres conseguir mejores hábitos de
              alimentación, planificar tu menús semanales, mejorar tu
              composición corporal o si tienes alguna patología digestiva,
              hepática, inf.renal... Si perteneces a un colegio, escuela
              infantil, centro sanitario o empresas dedicadas a la restauración
              colectiva, éste es tu sitio.
            </p>
          </div>
          <div className="about__logos">
            <Image
              className="about__logo"
              src={codinuscanLogo}
              alt="logo"
              width={100}
              height={100}
            />
            <Image
              className="about__logo"
              src={complutenseLogo}
              alt="logo"
              width={100}
              height={100}
            />
            <Image
              className="about__logo"
              src={universidadDeNavarraLogo}
              alt="logo"
              width={100}
              height={100}
            />
            <Image
              className="about__logo"
              src={esdenLogo}
              alt="logo"
              width={100}
              height={100}
            />
          </div>
        </section>
      </div>
    </div>
  )
}
