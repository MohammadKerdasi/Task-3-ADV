import "./Head.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faMap } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faLinkedin, faInstagram  } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-solid-svg-icons'


const headInfo = () => {
  return (
    <>
    <div className="Mk-Head">
      <div className="Mk-Info">
        <div>
              <FontAwesomeIcon className="Mk-envolopeIcon" icon={faEnvelope} style={{color: "#f35525",}} />
              <span className="Mk-borderRight">info@company.com</span>
        </div>
        <div>
              <FontAwesomeIcon className="Mk-envolopeIcon" icon={faMap} style={{color: "#f35525",}} />
              <span>Sunny island beach, 87642</span>
        </div>

      </div>
      <div>
        <ul className="Mk-ul">
          <li><a href="http://"> <FontAwesomeIcon icon={faFacebook} style={{color: "#ffffff",}}  size="lg" /></a></li>
          <li><a href="http://"> <FontAwesomeIcon icon={faTwitter} style={{color: "#ffffff",}} size="lg" /></a></li>
          <li><a href="http://"> <FontAwesomeIcon icon={faLinkedin} style={{color: "#ffffff",}} size="lg" /></a></li>
          <li><a href="http://"> <FontAwesomeIcon icon={faInstagram} style={{color: "#ffffff",}} size="lg" /></a></li>
    
        </ul>
      </div>

    </div>
    </>
  )
}

export default headInfo