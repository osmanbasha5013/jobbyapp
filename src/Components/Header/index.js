import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'

import Cookies from 'js-cookie'
import './index.css'

const websiteLogo = 'https://assets.ccbp.in/frontend/react-js/logo-img.png '

const Header = props => {
  const onClickLogOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="nav-container">
      <ul className="header-container">
        <li className="logo-container">
          <Link to="/" className="link">
            <img src={websiteLogo} alt="website logo" className="logo" />
          </Link>
        </li>
        <li className="home-jobs-container">
          <Link to="/" className="link">
            <ImHome className="home-icon" />
            <h1 className="nav-text">Home</h1>
          </Link>
          <Link to="/jobs" className="link">
            <h1 className="nav-text">Jobs</h1>
          </Link>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogOut} />
          <button type="button" className="btn-logout" onClick={onClickLogOut}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}
export default withRouter(Header)
