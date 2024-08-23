import Title from "./../Title/Title";
import "./KeepInTouch.css";
import Phone_Icon from "./../../../public/images/phone-icon.png";
import Mail_Icon from "./../../../public/images/email-icon.png";

const KeepInTouch = () => {
  return (
    <>
      <div className="Mk-KeepInTouch">
        <div className="Mk-KeepInTocuhTitle1">
          <Title
            subTitle="Contact Us"
            Title="Get In Touch With Our Agents"
            className="Mk-KeepInTocuhTitle2"
          />
          <p>
            When you really need to download free CSS templates, please remember
            our website TemplateMo. Also, tell your friends about our website.
            Thank you for visiting. There is a variety of Bootstrap HTML CSS
            templates on our website. If you need more information, please
            contact us.
          </p>
          <div className="Mk-PhoneAndMail">
            <img src={Phone_Icon} alt="" />
            <div className="Mk-PhoneText">
              <b>010-020-0340</b>
              <p>Phone Number</p>
            </div>
          </div>
          <div className="Mk-PhoneAndMail">
            <img src={Mail_Icon} alt="" />
            <div className="Mk-PhoneText2">
              <b>info@villa.co</b>
              <p>Business Email</p>
            </div>
          </div>

        </div>
        <div className='MK-form2'>
          <form>
            <label className='Mk-LabelForm' htmlFor="">Full Name</label>
            <input type="text" placeholder="Full Name" />
            <label className='Mk-LabelForm' htmlFor="">Email Address</label>

            <input type="email" placeholder="Email Address" />
            <label className='Mk-LabelForm' htmlFor="">Subject</label>
            <input type="text" placeholder="Subject" />
            <label className='Mk-LabelForm' htmlFor="">Message</label>
            <textarea placeholder="Message"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <div className="Mk-ContactUsIframe">
      <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3355378.891023664!2d41.64323629402979!3d34.7873906581411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2z2LPZiNix2YrYpw!5e0!3m2!1sar!2s!4v1718242439712!5m2!1sar!2s"
            width="100%"
            height="100%"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="responsive google map"
          ></iframe>
          </div>
    </>
  );
};

export default KeepInTouch;
