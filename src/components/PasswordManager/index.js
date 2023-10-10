import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

const randomColorList = [
  '#7683cb',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
]

class PasswordManager extends Component {
  state = {
    websiteName: '',
    username: '',
    password: '',
    passwordList: [],
    searchInput: '',
    showPassword: false,
    color: '',
  }

  onInputChange = e => {
    const {name, value} = e.target
    this.setState({[name]: value})
  }

  onAddNewPassword = e => {
    e.preventDefault()
    const {websiteName, username, password} = this.state
    if (!(username && password && websiteName)) {
      return
    }

    const randomColorIndex = Math.floor(Math.random() * randomColorList.length)

    const randomBackgroundColor = randomColorList[randomColorIndex]

    const newPasswordList = {
      id: uuidv4(),
      websiteName,
      username,
      password,
      color: randomBackgroundColor,
    }
    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPasswordList],
    }))

    this.setState({
      websiteName: '',
      username: '',
      password: '',
      color: '',
    })
  }

  onPasswordSearch = e => {
    this.setState({searchInput: e.target.value})
  }

  onPasswordDelete = id => {
    const {passwordList} = this.state
    const deletedList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )
    this.setState({passwordList: deletedList})
  }

  filteredSearchList = () => {
    const {passwordList, searchInput} = this.state
    const filteredPassword = passwordList.filter(eachPassword =>
      eachPassword.websiteName
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )
    return filteredPassword
  }

  onChangeCheckbox = e => {
    this.setState({showPassword: e.target.checked})
  }

  render() {
    const {
      websiteName,
      username,
      password,
      searchInput,
      showPassword,
      color,
    } = this.state
    console.log(searchInput)
    const filteredList = this.filteredSearchList()
    return (
      <div className="password-manager-app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="password-manager-top-container">
          <form
            className="password-manager-input-field-main-container"
            onSubmit={this.onAddNewPassword}
          >
            <h1 className="add-new-password-heading">Add New Password</h1>
            <div className="password-manager-input-field-container">
              <div className="password-manager-input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="password-manager-input-field-logo"
                />
              </div>
              <div className="password-manager-input-field-name-container">
                <input
                  type="text"
                  placeholder="Enter Website"
                  className="password-manager-input-field-name"
                  name="websiteName"
                  value={websiteName}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="password-manager-input-field-container">
              <div className="password-manager-input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="password-manager-input-field-logo"
                />
              </div>
              <div className="password-manager-input-field-name-container">
                <input
                  type="text"
                  placeholder="Enter Username"
                  className="password-manager-input-field-name"
                  name="username"
                  value={username}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="password-manager-input-field-container">
              <div className="password-manager-input-field-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png "
                  alt="password"
                  className="password-manager-input-field-logo"
                />
              </div>
              <div className="password-manager-input-field-name-container">
                <input
                  type="password"
                  placeholder="Enter Password"
                  className="password-manager-input-field-name"
                  name="password"
                  value={password}
                  onChange={this.onInputChange}
                />
              </div>
            </div>
            <div className="password-manager-add-button-container">
              <button type="submit" className="password-manager-add-button">
                Add
              </button>
            </div>
          </form>
          {/*
          <picture>
            <source media="(max-width: 768px)" srcSet="small-image.jpg" />
            <source
              media="(min-width: 769px)"
              srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
            <source
              media="(max-width: 768px)"
              srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            />
          </picture>
          */}
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-top-container-image-lg"
            />
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
              className="password-manager-top-container-image-sm"
            />
          </div>
        </div>
        <div className="password-manager-bottom-container">
          <div className="password-manager-password-count-search-container">
            <div className="password-manager-your-password-container">
              <h1 className="your-password-text">Your Passwords</h1>
              <p className="your-password-count">{filteredList.length}</p>
            </div>
            <div className="password-manager-search-container">
              <div className="password-manager-search-icon-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                  alt="search"
                  className="password-manager-search-icon"
                />
              </div>
              <div className="password-manager-search-text-container">
                <input
                  type="search"
                  placeholder="Search"
                  className="password-manager-search-input"
                  onChange={this.onPasswordSearch}
                  value={searchInput}
                />
              </div>
            </div>
          </div>
          <hr className="horizontal-line" />
          <div className="show-password">
            <input
              type="checkbox"
              id="search"
              className="show-password-box"
              onChange={this.onChangeCheckbox}
            />
            <label htmlFor="search" className="show-password-text">
              Show passwords
            </label>
          </div>
          {filteredList.length > 0 ? (
            <ul className="password-list-container">
              {filteredList.map(eachPassword => (
                <PasswordItem
                  eachPasswordDetail={eachPassword}
                  key={eachPassword.id}
                  onDelete={this.onPasswordDelete}
                  showPassword={showPassword}
                  randomBackgroundColor={color}
                />
              ))}
            </ul>
          ) : (
            <div className="no-passwords-image-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password-text">No Passwords</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}
export default PasswordManager
