import './CardSection.css'

export const CardSection = () => {
  return (
    <div className="cardSection">
      <article className="card1 card">
        <div className="text-content">
          <h2>{t('HOME.core-values.made-for-women-title')}</h2>
          {/* <h2> </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:  ,
            }}
          /> */}
        </div>
      </article>
      <article className="card2 card">
        <div className="text-content">
          <h2>{t('HOME.core-values.investigation-title')}</h2>
          {/* <h2> </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:  ,
            }}
          /> */}
        </div>
      </article>
      <article className="card3 card">
        <div className="text-content">
           <h2>{t('HOME.core-values.education-title')}</h2>
          {/* <h2> </h2>
          <p
            dangerouslySetInnerHTML={{
              __html:  ,
            }}
          /> */}
        </div>
      </article>
    </div>
  )
}
