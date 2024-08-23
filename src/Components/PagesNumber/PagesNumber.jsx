import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './PagesNumber.css'
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const PagesNumber = () => {
  return (
    <>
      <div className="Mk-PageNum">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button><FontAwesomeIcon icon={faAnglesRight} size="lg" style={{color: "#ffffff",}} /></button>
      </div>
    </>
  );
};

export default PagesNumber;
