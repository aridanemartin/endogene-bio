'use client'

import { useTranslation } from 'src/app/i18n/client'
import './Headline.scss'

interface HeadlineProps {
  titleKey: string
  subtitleKey?: string
  id?: string
  headlineType?: HeadlineType
  styles?: any
  lng: string
}

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4'

const Headline = ({
  titleKey,
  subtitleKey,
  id,
  headlineType = 'h2',
  styles,
  lng,
}: HeadlineProps) => {
  const { t } = useTranslation(lng)
  const title = t(titleKey)
  const subtitle = subtitleKey ? t(subtitleKey) : null

  const renderHeadline = (headlineType: HeadlineType) => {
    switch (headlineType) {
      case 'h1':
        return (
          <h1
            className="headline__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )
      case 'h2':
        return (
          <h2
            className="headline__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )
      case 'h3':
        return (
          <h3
            className="headline__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )
      case 'h4':
        return (
          <h4
            className="headline__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )
      default:
        return (
          <h2
            className="headline__title"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )
    }
  }

  return (
    <div className="headline" id={id} style={styles}>
      {renderHeadline(headlineType)}
      {subtitleKey && (
        <p
          className="headline__subtitle"
          dangerouslySetInnerHTML={{ __html: subtitle }}
        />
      )}
    </div>
  )
}

export default Headline
