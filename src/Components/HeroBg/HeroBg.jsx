import './HeroBg.css'


const HeroBg = ({ Title, subTitle }) => {
  return (
    <>
      <div className="Mk-backImgPages">
        <p>{subTitle}</p>
        <h3>{Title}</h3>
      </div>
    </>
  );
};

export default HeroBg;
