import React from "react";
import "./App.css";
import "./components/cards/ContentData.css";
import "./components/cards/LeftContainer.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faBars,
  faClock,
  faClockRotateLeft,
  faEllipsis,
  faEllipsisVertical,
  faFileVideo,
  faFilm,
  faHome,
  faPlay,
  faTableList,
  faThumbsUp,
  faUser,
  faVideoCamera,
  faVideoSlash,
} from "@fortawesome/free-solid-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faMicrophone } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { Image1, Image2, Image3, Image4, Image5, Image6 } from "./images/image";
import ContentComponent from "./components/cards/ContentData";
import LeftComponent from "./components/cards/LeftContainer";

function App() {
  return (
    <div className="App">
      <nav>
        <div className="logo">
          <FontAwesomeIcon className="Bars" icon={faBars} />
          <FontAwesomeIcon icon={faYoutube} className="logo-icon" />
          <h3>
            YouTube<span>NG</span>
          </h3>
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search"></input>
          <FontAwesomeIcon
            className="MagnifyingGlass"
            icon={faMagnifyingGlass}
          />
          <FontAwesomeIcon className="faMicrophone" icon={faMicrophone} />
        </div>
        <div className="user-container">
          <FontAwesomeIcon className="faVideo" icon={faVideo} />
          <FontAwesomeIcon className="faBell" icon={faBell} />
          <div className="user">R</div>
        </div>
      </nav>

      <div className="main-container">
        <LeftComponent/>
        <div className="right-container">
          <div className="interest">
            <h4>All</h4>
            <h4>Monkey D. Luffy</h4>
            <h4>Music</h4>
            <h4>Live</h4>
            <h4>Gaming</h4>
            <h4>AMVs</h4>
            <h4>Podcasts</h4>
            <h4>Mixes</h4>
            <h4>Highlight films</h4>
            <h4>Contemporary Worship Music</h4>
            <h4>Free Fire Max</h4>
          </div>
          <ContentComponent/>
        </div>
      </div>
    </div>
  );
}
export default App;
