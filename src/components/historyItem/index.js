const HistoryItem = props => {
  const {itemDetails} = props
  const {timeAccessed, logoUrl, title, domainUrl} = itemDetails

  return (
    <li>
      <div className="item-container">
        <p>{timeAccessed}</p>
        <img src={logoUrl} />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
    </li>
  )
}

export default HistoryItem
