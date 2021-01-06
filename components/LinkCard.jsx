import React from "react";

import Link from "next/link";

import GlassesLogo from "../components/logos/GlassesLogo";

const LinkCard = ({ card }) => {
  const linkText = "Check it out";

  // Adjust inline styles on hover
  const [isHovered, setIsHovered] = React.useState(false);
  const onHover = () => setIsHovered(true);
  const onLeave = () => setIsHovered(false);

  //pull stuff off of props or set defaults
  const {
    color = "#0E3982",
    bgImage = "/images/pages/portfolio/portfolio_default.jpg",
    image = null,
    title = "Title",
    description = "Description",
    href = "/",
  } = card;

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
        <div className="contentContainer">
          <h5 className="bg-light text-dark px-2 rounded">{title}</h5>
          <div className="row">{description}</div>

          <Link href={href}>
            <a className="btn btn-sm btn-outline-dark text-white border border-white">
              {linkText}
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
