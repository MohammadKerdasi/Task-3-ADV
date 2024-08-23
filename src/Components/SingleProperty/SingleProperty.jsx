import './SingleProperty.css'
import './../Appartment/Appartment.css'
import Prop_1 from './../../../public/images/single-property.jpg'
import first_Icon from './../../../public/images/info-icon-01.png'
import second_Icon from './../../../public/images/info-icon-02.png'
import third_Icon from './../../../public/images/info-icon-03.png'
import fourth_Icon from './../../../public/images/info-icon-04.png'
import GetBestVilla from '../GetBestVilla/GetBestVilla'

const SingleProperty = () => {
  return (
    <>
      <div className="Mk-SinglePropWithImg">
        <div className="Mk-SingleImg">
            <img src={Prop_1} alt="" />
            <p className='MK-firstP'>Appartment</p>
            <h4>24 New Street Miami, OR 24560</h4>
            <GetBestVilla/>
        </div>
           
        <div className='Mk-250'>
          <div className='Mk-flatSpace'>
            <img style={{width : '60px'}} src={first_Icon} alt="" />
            <div className='Mk-250boldAndP'>
              <b>250 m2</b>
              <p>Total Flat Space</p>
              </div>
          </div>
          <div className='Mk-flatSpace'>
            <img style={{width : '60px'}} src={second_Icon} alt="" />
            <div className='Mk-250boldAndP'>
              <b>Contract</b>
              <p>Contract Ready</p>
              </div>
          </div>
          <div className='Mk-flatSpace'>
            <div className='Mk-flexDirectioncolumn'>
            <img style={{width : '60px'}} src={third_Icon} alt="" />
            <p>Process</p>
            </div>
            <div className='Mk-250boldAndP'>
              <b>250 m2</b>
              <p>Total Flat Space</p>
              </div>
          </div>
          <div className='Mk-flatSpace'>
          <div className='Mk-flexDirectioncolumn'>
            <img style={{width : '60px'}} src={fourth_Icon} alt="" />
            <p>Control</p>
            </div>
            <div className='Mk-250boldAndP'>
              <b>250 m2</b>
              <p>Total Flat Space</p>
              </div>
          </div>


        </div>
      </div>
    </>
  );
};

export default SingleProperty;
