import './CardSection.css'

export const CardSection = ({ t }) => {
  return (
    <div className="cardSection">
      <article className="card1 card">
        <div className="text-content">
          <h2>{t('HOME.our-values.humanity.title')}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('HOME.our-values.humanity.text'),
            }}
          />
        </div>
      </article>
      <article className="card2 card">
        <div className="text-content">
          <h2>{t('HOME.our-values.innovation.title')}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('HOME.our-values.innovation.text'),
            }}
          />
        </div>
      </article>
      <article className="card3 card">
        <div className="text-content">
          <h2>{t('HOME.our-values.determination.title')}</h2>
          <p
            dangerouslySetInnerHTML={{
              __html: t('HOME.our-values.determination.text'),
            }}
          />
        </div>
      </article>
    </div>
  )
}
