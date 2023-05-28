import Header from '../Header'
import './index.css'

const notFoundImgUrl =
  'https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-container ">
      <div className="not-found-image-container">
        <img src={notFoundImgUrl} alt="not found" className="not-found-img" />
      </div>
      <h1 className="not-found-heading">Page Not Found</h1>
      <p className="not-found-description">
        We are sorry, the page you requested could not be found
      </p>
    </div>
  </>
)

export default NotFound
