import './CardSection.css'

export const CardSection = ({ t }) => {
  return (
    <div className="cardSection">
      <article className="card1 card">
        <div className="text-content">
          <h2>{t('HOME.core-values.made-for-women-title')}</h2>
          <p>{t('HOME.core-values.made-for-women-text')}</p>
        </div>
      </article>
      <article className="card2 card">
        <div className="text-content">
          <h2>{t('HOME.core-values.investigation-title')}</h2>
          <p>{t('HOME.core-values.investigation-text')}</p>
        </div>
      </article>
      <article className="card3 card">
        <div className="text-content">
          <h2>{t('HOME.core-values.education-title')}</h2>
          <p>{t('HOME.core-values.education-text')}</p>
        </div>
      </article>
    </div>
  )
}
