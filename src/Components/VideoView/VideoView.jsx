import './VideoView.css'
import TitleWhite from './../TitleWhite/TitleWhite'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

const VideoView = () => {
  return (
    <div className='Mk-videoSection'>
        <TitleWhite subTitleWhite="Video View" TitleWhite='Get Closer View & Different Felling' />
        <div className='Mk-CentralImg'>
            <div className='Mk-playIcon'>
            <FontAwesomeIcon icon={faPlay} size="x" style={{color: "#f44346",}} />
            </div>
        </div>

    </div>
  )
}

export default VideoView