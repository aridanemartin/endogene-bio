import './Headline.scss'

interface HeadlineProps {
  title: string
  subtitle?: string
}

const Headline = ({ title, subtitle }: HeadlineProps) => {
  return (
    <div className="headline">
      <h2 className="headline__title">{title}</h2>
      {subtitle && <p className="headline__subtitle">{subtitle}</p>}
    </div>
  )
}

export default Headline
