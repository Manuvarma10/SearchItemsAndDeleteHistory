import './index.css'

const HistoryItem = props => {
  const {historyItem, onDelete} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <div className="list-items">
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
      </div>
      <button type="button" data-testid="delete" onClick={handleDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
