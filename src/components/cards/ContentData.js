import React from "react";
import {
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
} from "../../images/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

const ContentData = [
  {
    image: Image6,
    title: "Build Website with RichyTech",
    description:
      "RichyTech helps you build your websites and makes it more responsive and beautiful.",
    sponsor: "4xmpire",
  },
  {
    image: Image2,
    title: "Best Keybored Practices | (Live official video)",
    userImage: Image2,
    userName: "AngeloK",
    views: "1.8M views",
    timeAgo: "1 year ago",
  },
  {
    image: Image3,
    title: "Health Lessons that will keep you longer",
    userImage: Image3,
    userName: "Doctor Nick",
    views: "238k views",
    timeAgo: "2 days ago",
  },
  {
    image: Image4,
    title: "Happy Home | Happy Living",
    userImage: Image4,
    userName: "S & K Drinks",
    views: "1.2M views",
    timeAgo: "22 weeks ago",
  },
  {
    image: Image5,
    title: "Welcome to California",
    userImage: Image5,
    userName: "Tini DG",
    views: "18M views",
    timeAgo: "2 years ago",
  },
  {
    image: Image1,
    title: "How To Run Facebook Ads",
    userImage: Image1,
    userName: "Mr ads",
    views: "100k views",
    timeAgo: "1 Month ago",
  },
];

const ContentComponent = () => {
  return (
    <div className="content-container">
      {ContentData.map((content, index) => (
        <div className="content" key={index}>
          <img src={content.image} alt={content.title} />
          {
            <div className="user-details" key={index}>
              <div className="user-details-content">
                <h4 style={{ display: "flex", alignItems: "center" }}>
                  <img
                    src={content.userImage}
                    alt={content.userName}
                    style={{
                      width: 20,
                      height: 20,
                      marginRight: 5,
                      display: index === 0 ? "none" : "block", // Hide first userImage
                    }}
                  />
                  {content.title}
                </h4>
                <p>{content.userName}</p>
                {content.description && (
                  <div>
                    <p>{content.description}</p>
                    <p> Sponsor: {content.sponsor}</p>
                  </div>
                )}
                <p>
                  {content.views} . {content.timeAgo}
                </p>
              </div>
              <FontAwesomeIcon
                className="faEllipsisVertical"
                icon={faEllipsisVertical}
              />
            </div>
          }
        </div>
      ))}
    </div>
  );
};
export default ContentComponent;
