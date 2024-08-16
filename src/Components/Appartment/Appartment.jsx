import './Appartment.css'
import Title from './../Title/Title'
import FAQsPage from '../FAQs/FAQs'

import Featuerd_Icon from './../../../public/images/featured-icon.png'
import first_Icon from './../../../public/images/info-icon-01.png'
import second_Icon from './../../../public/images/info-icon-02.png'
import third_Icon from './../../../public/images/info-icon-03.png'
import fourth_Icon from './../../../public/images/info-icon-04.png'

const Appartment = () => {
  return (
    <div className="Mk-appartmentSection">
        <div className='Mk-firstFeatured'>
              <div className='Mk-FeaturedIcon'>
                <img src={Featuerd_Icon} alt="" />
              </div>
        </div>
        <div className='Mk-appartmentTitle'>
          <Title subTitle='Featured' Title='Best Appartment & Sea View'/>
          <div className='Mk-BestUseful'>
            <FAQsPage/>
          </div>
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
  )
}

export default Appartment