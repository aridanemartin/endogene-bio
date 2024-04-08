import './Headline.scss'

interface HeadlineProps {
  title: string
  subtitle?: string
  id?: string
  headlineType?: HeadlineType
  styles?: any
}

type HeadlineType = 'h1' | 'h2' | 'h3' | 'h4'

const Headline = ({
  title,
  subtitle,
  id,
  headlineType = 'h2',
  styles,
}: HeadlineProps) => {
  const renderHeadline = (headlineType: HeadlineType) => {
    switch (headlineType) {
      case 'h1':
        return <h1 className="headline__title">{title}</h1>
      case 'h2':
        return <h2 className="headline__title">{title}</h2>
      case 'h3':
        return <h3 className="headline__title">{title}</h3>
      case 'h4':
        return <h4 className="headline__title">{title}</h4>
      default:
        return <h2 className="headline__title">{title}</h2>
    }
  }

  return (
    <div className="headline" id={id} style={styles}>
      {renderHeadline(headlineType)}
      {subtitle && <p className="headline__subtitle">{subtitle}</p>}
    </div>
  )
}

export default Headline
