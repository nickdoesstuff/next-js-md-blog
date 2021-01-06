import React from "react";

import GlassesLogo from "../components/logos/GlassesLogo";

const LinkCard = (props) => {
  // Adjust inline styles on hover
  const [isHovered, setIsHovered] = React.useState(false);
  const onHover = () => setIsHovered(true);
  const onLeave = () => setIsHovered(false);

  //pull stuff off of props or set defaults
  const {
    color = "#0E3982",
    bgImage = "/images/pages/portfolio/portfolio_default.jpg",
    image = null,
    title = "Dormakaba Market Masters",
  } = props;

  const cardColor = isHovered ? "#141c3a" : color;

  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`LinkCard col-12 col-lg-4 col-md-6 text-white ${
        isHovered ? "hovered" : ""
      }`}
    >
      <div className="card" style={{ backgroundColor: cardColor }}>
        {/* background image div */}
        <div
          className="cardImgOverlay"
          style={{ backgroundImage: `url('${bgImage}')` }}
        />
        <div className="logoContainer">
          {!image && <GlassesLogo scale={1.4} />}
          {image && <img src={image} alt="" />}
        </div>
        <div className="contentContainer">{props.children}</div>
      </div>
    </div>
  );
};

export default LinkCard;
