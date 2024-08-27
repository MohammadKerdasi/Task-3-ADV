import "./Fifth.css";
import Title from "../Title/Title";
import Deal_Photo from "./../../../public/images/deal-01.jpg";
import Deal_Photo2 from "./../../../public/images/deal-02.jpg";
import Deal_Photo3 from "./../../../public/images/deal-03.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Fifth = () => {
  const [activeTab, setActiveTab] = useState('appartment');

  const tabsData = {
    appartment:  (
      <>
        <div className="Mk-250">
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Total Flat Space</span>
              <b> 185 m2</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Floor Number</span>
              <b>26th</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Number Of Rooms</span>
              <b>4</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Parking Available</span>
              <b>Yes</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Payment Process</span>
              <b>Bank</b>
            </div>
          </div>
        </div>
        <div className="Mk-DealImg">
          <img
            style={{ margin: "0px 20px" }}
            width={500}
            src={Deal_Photo}
            alt=""
          />
        </div>
        <div className="Mk-ExtraInfo">
          <h3>Extra Info About Property</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quidem. Sed aperiam iusto hic. Cumque atque sequi eius incidunt
            laboriosam perspiciatis quis et perferendis ratione sit, maxime
            beatae, ex doloribus!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, maxime
            deserunt. Ut nisi et amet sed! Minus neque suscipit, f ugiat itaque
            eaque dolor laudantium, impedit debitis illum voluptate illo. Quia?
          </p>
          <button className="Mk-button">
            <div className="Mk-icon-container">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="Mk-scheduleIcon"
              />
            </div>
            <span className="button-text">Schedule a visit</span>
          </button>
        </div>
      </>
    ),

    villa: (
      <>
        <div className="Mk-250">
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Total Flat Space</span>
              <b> 250 m2</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Floor Number</span>
              <b>26th</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Number Of Rooms</span>
              <b>5</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Parking Available</span>
              <b>Yes</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Payment Process</span>
              <b>Bank</b>
            </div>
          </div>
        </div>
        <div className="Mk-DealImg">
          <img
            style={{ margin: "0px 20px" }}
            width={500}
            src={Deal_Photo2}
            alt=""
          />
        </div>
        <div className="Mk-ExtraInfo">
          <h3>Detail Info About Villa</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quidem. Sed aperiam iusto hic. Cumque atque sequi eius incidunt
            laboriosam perspiciatis quis et perferendis ratione sit, maxime
            beatae, ex doloribus!
          </p>
          <p>
            Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents
            typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after
            messenger poutine next level humblebrag swag franzen.
          </p>
          <button className="Mk-button">
            <div className="Mk-icon-container">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="Mk-scheduleIcon"
              />
            </div>
            <span className="button-text">Schedule a visit</span>
          </button>
        </div>
      </>
    ),

    Pethouse: (
      <>
        <div className="Mk-250">
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Total Flat Space</span>
              <b> 180 m2</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Floor Number</span>
              <b>26th</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Number Of Rooms</span>
              <b>4</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Parking Available</span>
              <b>Yes</b>
            </div>
          </div>
          <div className="Mk-flatSpace">
            <div className="Mk-185boldAndspan">
              <span>Payment Process</span>
              <b>Bank</b>
            </div>
          </div>
        </div>
        <div className="Mk-DealImg">
          <img
            style={{ margin: "0px 20px" }}
            width={500}
            src={Deal_Photo3}
            alt=""
          />
        </div>
        <div className="Mk-ExtraInfo active">
          <h3>Extra Info About Penthouse</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
            quidem. Sed aperiam iusto hic. Cumque atque sequi eius incidunt
            laboriosam perspiciatis quis et perferendis ratione sit, maxime
            beatae, ex doloribus!
          </p>
          <p>
            Swag fanny pack lyft blog twee. JOMO ethical copper mug, succulents
            typewriter shaman DIY kitsch twee taiyaki fixie hella venmo after
            messenger poutine next level humblebrag swag franzen.
          </p>
          <button className="Mk-button">
            <div className="Mk-icon-container">
              <FontAwesomeIcon
                icon={faCalendarAlt}
                className="Mk-scheduleIcon"
              />
            </div>
            <span className="button-text">Schedule a visit</span>
          </button>
        </div>
      </>
    ),
  };

  return (
    <div className="Mk-FifthSec">
      <div className="Mk-BestDeal">
        <div>
          <Title subTitle="BEST DEAL" Title="Find Your Best Deal Right Now!" />
        </div>
        <div className="Mk-ThreeBtns">
          <button
            className={`Mk-FifthBtns ${activeTab === 'appartment' ? 'active' : ''}`}
            onClick={() => setActiveTab("appartment")}
          >
            Appartment
          </button>
          <button
            className={`Mk-FifthBtns ${activeTab === 'villa' ? 'active' : ''}`}
            onClick={() => setActiveTab("villa")}
          >
            Villa House
          </button>
          <button
            className={`Mk-FifthBtns ${activeTab === 'pethouse' ? 'active' : ''}`}
            onClick={() => setActiveTab("Pethouse")}
          >
            Pethouse
          </button>
        </div>
      </div>
      <div className="Mk-Property">{tabsData[activeTab]}</div>
    </div>
  );
};

export default Fifth;
