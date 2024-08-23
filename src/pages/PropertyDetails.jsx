import NavBar from "./../Components/NavBar/NavBar"
import Head from "./../Components/Head/Head"
import HeroBg from "./../Components/HeroBg/HeroBg"
import SingleProperty from "../Components/SingleProperty/SingleProperty"
import Properties from "../Components/Properties/Properties"
import Fifth from "../Components/Fifth/Fifth"
import Footer from "../Components/Footer/Footer"



const PropertyDetails = () => {
  return (
    <>
          <Head />
          <NavBar />
          <HeroBg subTitle ='HOME / SINGLE PROPERTY' Title = ' SINGLE PROPERTY' />
          <SingleProperty/>
          <Fifth/>
          <Footer className='Mk-SecCopyRight' />
          
    </>
  )
}

export default PropertyDetails