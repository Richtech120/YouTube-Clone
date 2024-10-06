import React from "react";
import {
  faAngleRight,
  faClock,
  faClockRotateLeft,
  faFilm,
  faHome,
  faPlay,
  faTableList,
  faThumbsUp,
  faUser,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LeftData = [
  {
    Icone: faHome,
    Details: "Home",
  },
  {
    Icone: faFilm,
    Details: "Shorts",
  },
  {
    Icone: faPlay,
    Details: "Subscriptions",
  },
  {
    Icone: faUser,
    Details: "Your channel",
  },
  {
    Icone: faClockRotateLeft,
    Details: "History",
  },
  {
    Icone: faTableList,
    Details: "Playlists",
  },
  {
    Icone: faVideo,
    Details: "Your Videos",
  },
  {
    Icone: faClock,
    Details: "Watch later",
  },
  {
    Icone: faThumbsUp,
    Details: "Liked videos",
  },
];

const LeftComponent = () => {
  //   return (
  //     <div className="left-container">
  //       {LeftData.map((content, index) => (
  //         <div className="left" key={index}>
  //           <FontAwesomeIcon icon={content.Icone} />
  //           <p>{content.Details}</p>

  //           {index === 2 && (
  //             <>
  //               <hr className="hr" />
  //               <p className="you">
  //                 You
  //                 <FontAwesomeIcon className="faAngleRight" icon={faAngleRight} />
  //               </p>
  //             </>
  //           )}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // };

  return (
    <div className="left-container">
      {LeftData.map((content, index) => (
        <React.Fragment key={index}>
          <div className="left">
            <FontAwesomeIcon icon={content.Icone} />
            <p>{content.Details}</p>
          </div>

          {/* Conditionally add the hr and You block after the 3rd item (index 2) */}
          {index === 2 && (
            <>
              <hr className="hr" />
              <p className="you">
                You{" "}
                <FontAwesomeIcon className="faAngleRight" icon={faAngleRight} />
              </p>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
export default LeftComponent;
