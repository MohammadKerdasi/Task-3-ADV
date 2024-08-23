import NavBar from "./../Components/NavBar/NavBar"
import Head from "./../Components/Head/Head"
import HeroBg from "./../Components/HeroBg/HeroBg"
import KeepInTouch from "../Components/KeepInTouch/KeepInTouch";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Head />
      <NavBar />
      <HeroBg subTitle="Home / Contact Us" Title=" CONTACT US" />
      <KeepInTouch/>
      <Footer className='Mk-SecCopyRight' />
    </>
  );
};

export default Contact;
