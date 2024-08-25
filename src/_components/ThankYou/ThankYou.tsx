'use client'
import React from 'react'
import notFoundIconContainer from '@assets/icons/notFound.svg'
import Image from 'next/image'
import { useTranslation } from 'src/app/i18n/client'
import './ThankYou.css'
import Link from 'next/link'

export const ThankYou = ({ locale }) => {
  const { t } = useTranslation(locale)

  const renderThankYouMessage = () => {
    return (
      <>
        <h1>{t('THANK-YOU.title')}</h1>
        <div className="thankYouImage">
          <Image src={notFoundIconContainer} alt="MessageIcon" fill />
        </div>
        <p>{t('THANK-YOU.message')}</p>
      </>
    )
  }

  return (
    <div>
      <div className="notFoundIconContainer">
        <div className="thankYouContent">{renderThankYouMessage()}</div>
        <Link className="goBackButton" href="/">
          {t('THANK-YOU.go-back')}
        </Link>
      </div>
    </div>
  )
}
