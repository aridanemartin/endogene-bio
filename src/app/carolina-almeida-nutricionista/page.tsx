import React from 'react'
import '@styles/About.scss'
import heroImage from '@assets/pictures/carolinaProfileSquare.jpg'
import Image from 'next/image'

export default function About() {
  return (
    <div className="about__background">
      <div className="about">
        <section className="about__profile">
          <div className="about__profile-image">
            <Image src={heroImage} alt="hero" fill objectFit="cover" />
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
        </section>
        <section className="about__content">
          <h2 className="about__content-title">Sobre mi</h2>
          <p className="about__content-text">
            Soy Carolina Almeida, Diplomada en Nutrición Humana y Dietética.
            Colegiada en el Colegio de Dietistas-Nutricionistas de las islas
            Canarias CODINUISCAN.
            <br />
            <br />
            Con Máster en Nutrición Clínica y Endocrinología y postgrado en
            Obesidad. También soy Licenciada en Ciencia y Tecnología de los
            Alimentos con Máster en Tecnología y Gestión de la Calidad en la
            Industria Agroalimentaria. Con una larga trayectoria profesional,
            más de 15 años de experiencia.
            <br />
            <br />
            Te puedo ayudar si quieres conseguir mejores hábitos de
            alimentación, planificar tu menús semanales, mejorar tu composición
            corporal o si tienes alguna patología digestiva, hepática,
            inf.renal...
            <br />
            <br />
            Si perteneces a un colegio, escuela infantil, centro sanitario o
            empresas dedicadas a la restauración colectiva, éste es tu sitio.
          </p>
          <div className="about__social"></div>
        </section>
      </div>
    </div>
  )
}
