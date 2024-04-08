import './PositionsList.css'

export const PositionsList = ({ positions }) => {
  const renderPositionsList = () => {
    return (
      <ul>
        {positions.map((position, index) => (
          <li className="position" key={index}>
            <h3>{position.positionName}</h3>
            <div className="positionDescription">
              <p>{position.positionLocation}</p>
              <p>({position.positionType})</p>
            </div>
          </li>
        ))}
      </ul>
    )
  }

  const renderNoPositions = () => {
    return (
      <p className="noPositions">
        No positions available at the moment. Keep visiting us for updates!
      </p>
    )
  }

  return (
    <section className="positionsList">
      <h2>Open Positions:</h2>
      {positions ? renderPositionsList() : renderNoPositions()}
    </section>
  )
}
