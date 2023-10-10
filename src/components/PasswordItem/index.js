import './index.css'

function PasswordItem(props) {
  const {eachPasswordDetail, onDelete, showPassword} = props
  const {id, websiteName, username, password, color} = eachPasswordDetail
  const websiteProfile = websiteName[0].toUpperCase()

  const deletePassword = () => {
    onDelete(id)
  }

  return (
    <li className="password-item-main-container">
      <div className="password-item-sub-container">
        <div
          className="password-item-website-profile-container"
          style={{backgroundColor: color}}
        >
          <p className="password-item-website-profile-name">{websiteProfile}</p>
        </div>
        <div className="password-item-website-and-user-info-container">
          <p className="password-item-website-name">{websiteName}</p>
          <p className="password-item-website-name">{username}</p>
          {showPassword ? (
            <p className="password-item-website-name">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
              alt="stars"
              className="password-item-website-stars"
            />
          )}
        </div>
      </div>
      <div>
        <button
          type="button"
          className="password-item-delete-container"
          onClick={deletePassword}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
            className="password-item-delete-img"
          />
        </button>
      </div>
    </li>
  )
}
export default PasswordItem
