import {
  faBed,
  faBriefcase,
  faCalendarDay,
  faCar,
  faChampagneGlasses,
  faCross,
  faHandshake,
  faMagnifyingGlass,
  faPeopleRoof,
  faPlane,
  faRing,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { useState } from "react";
import video from "../../assets/video.mp4";

const Header = () => {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  return (
    <div className="header">
      <video src={video} className="video-bg" autoPlay muted loop></video>
      <div className="headerContainer">
        <div className="headerList ">
          <div className="headerItems active">
            <FontAwesomeIcon icon={faRing} />
            <span>Wedding</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faBriefcase} />
            <span>Business</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faChampagneGlasses} />
            <span>Party</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faCross} />
            <span>Funeral</span>
          </div>
          <div className="headerItems">
            <FontAwesomeIcon icon={faHandshake} />
            <span>Meeting</span>
          </div>
        </div>
        <div className="headerTitle">
          <p>We do not remember the days, but rather the moments!</p>
        </div>
        <div className="desc">
          <h2>Discover it. Book it. Enjoy the moments.</h2>
        </div>
        <div className="headerSearch">
          <input
            type="text"
            placeholder="Looking for an event center near you....."
            className="headerInput"
          />
          <div className="inputIcon">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ fontSize: "30", color: "blue", cursor: "pointer" }}
            />
          </div>
        </div>
        <div className="headerCalender">
          <div className="calender">
            <div className="duration">Duration</div>
            <FontAwesomeIcon
              icon={faCalendarDay}
              style={{ marginRight: "10px", fontSize: "24px" }}
            />
            <span onClick={() => setOpenDate(!openDate)} className="openSpan">
              {`${format(date[0].startDate, "dd/MM/yyyy")} - ${format(
                date[0].endDate,
                "dd/MM/yyyy"
              )}`}
            </span>
            {openDate && (
              <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />
            )}
          </div>
          <div className="rangeCal">
            <button className="rangeBtn"> 5 days</button>
            <button button className="rangeBtn">
              50 Guests
            </button>
          </div>
          <div className="guest">
            <span className="guestSpan">Number of Guest</span>
            <FontAwesomeIcon icon={faPeopleRoof} style={{ fontSize: "24px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
