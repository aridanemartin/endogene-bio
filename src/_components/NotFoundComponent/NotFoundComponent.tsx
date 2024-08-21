'use client'
import React from 'react'
import notFoundIconContainer from '@assets/icons/notFound.svg'
import Image from 'next/image'
import { useTranslation } from 'src/app/i18n/client'
import './NotFoundComponent.css'

export const NotFoundComponent = ({ locale, isBlogPage = false }) => {
  const { t } = useTranslation(locale)

  const render404Error = () => {
    return (
      <>
        <h1>{t('404.title')}</h1>
        <div className="errorImage">
          <Image src={notFoundIconContainer} alt="Not found ivon" fill />
        </div>
        <h2>{t('404.text.title')}</h2>
        <p>{t('404.text.message')}</p>
      </>
    )
  }

  const renderBlogError = () => {
    return (
      <>
        <h1>{t('BLOG.no-posts.title')}</h1>
        <div className="errorImage">
          <Image src={notFoundIconContainer} alt="Not found ivon" fill />
        </div>
        <p>{t('BLOG.no-posts.message')}</p>
      </>
    )
  }

  return (
    <div>
      <div className="notFoundIconContainer">
        <div className="errorContent">
          {isBlogPage ? renderBlogError() : render404Error()}
        </div>
      </div>
    </div>
  )
}
