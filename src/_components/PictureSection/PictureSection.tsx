'use client'

import './PictureSection.scss'
import Image, { StaticImageData } from 'next/image'
import { Trans } from 'react-i18next'
import { useTranslation } from 'src/app/i18n/client'

type PicturePosition = 'left' | 'right'

interface PictureSectionProps {
  pictureSrc: StaticImageData
  picturePosition: PicturePosition
  translationKey: string
  lng: string
}

const PictureSection = ({
  pictureSrc: pictureUrl,
  picturePosition,
  translationKey,
  lng,
}: PictureSectionProps) => {
  const { t } = useTranslation(lng)

  return (
    <div className={`picture-section picture-section__${picturePosition}`}>
      <div className="picture-section__picture-wrapper">
        <Image
          className="picture-section__picture"
          src={pictureUrl}
          alt="Picture"
        />
      </div>
      <div className="picture-section__text">
        <Trans
          t={t}
          i18nKey={translationKey}
          components={{ br: <br />, p: <p />, h2: <h2 />, h3: <h3 /> }}
        />
      </div>
    </div>
  )
}

export default PictureSection
