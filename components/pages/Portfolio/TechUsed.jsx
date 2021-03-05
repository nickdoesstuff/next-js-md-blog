import SassLogo from "../../logos/SassLogo";
import XDLogo from "../../logos/XDLogo";
import PSLogo from "../../logos/PSLogo";
import GALogo from "../../logos/GALogo";
import GSheetsLogo from "../../logos/GSheetsLogo";

const techList = [
  {
    id: "react",
    elem: (
      <a href="https://reactjs.org/" title="React" target="_blank">
        <i className="fab fa-react"></i>
      </a>
    ),
  },
  {
    id: "angular",
    elem: (
      <a href="https://angular.io/" title="Angular" target="_blank">
        <img
          src="/images/svg/angular.svg"
          height="32"
          style={{ position: "relative", top: "10px" }}
        />
      </a>
    ),
  },
  {
    id: "jquery",
    elem: (
      <a href="https://jquery.com/" title="jQuery" target="_blank">
        <img
          src="/images/jquery_logo.png"
          height="36"
          style={{ position: "relative", top: "10px" }}
        />
      </a>
    ),
  },
  {
    id: "backbone",
    elem: (
      <a href="https://backbonejs.org/" title="Backbone JS" target="_blank">
        <img
          src="/images/backbone.png"
          height="32"
          style={{ position: "relative", top: "10px" }}
        />
      </a>
    ),
  },
  {
    id: "sass",
    elem: (
      <a href="https://sass-lang.com/" title="Sass" target="_blank">
        <SassLogo scale={0.075} />
      </a>
    ),
  },
  {
    id: "less",
    elem: (
      <a href="http://lesscss.org/" title="Less" target="_blank">
        <img
          src="/images/svg/LESS_Logo.svg"
          height="20"
          style={{ position: "relative", top: "10px" }}
        />
      </a>
    ),
  },
  {
    id: "xd",
    elem: (
      <a
        href="https://www.adobe.com/products/xd.html"
        title="Adobe XD"
        target="_blank"
      >
        <XDLogo scale={0.13} />
      </a>
    ),
  },
  {
    id: "ps",
    elem: (
      <a
        href="https://www.adobe.com/products/photoshop.html"
        title="Adobe Photoshop"
        target="_blank"
      >
        <PSLogo scale={0.13} />
      </a>
    ),
  },
  {
    id: "ai",
    elem: (
      <a
        href="https://www.adobe.com/products/illustrator.html"
        title="Adobe Illustrator"
        target="_blank"
      >
        <img
          src="/images/ai.png"
          height="30"
          style={{ position: "relative", top: "10px" }}
        />
      </a>
    ),
  },
  {
    id: "ga",
    elem: (
      <a
        href="https://analytics.google.com/analytics/web/"
        title="Google Analytics"
        target="_blank"
      >
        <GALogo scale={0.26} />
      </a>
    ),
  },
  {
    id: "sheets",
    elem: (
      <a
        href="https://www.google.com/sheets/about/"
        title="Google Sheets"
        target="_blank"
      >
        <GSheetsLogo scale={0.066} />
      </a>
    ),
  },
  {
    id: "excel",
    elem: (
      <a
        href="https://www.microsoft.com/en-us/microsoft-365/excel"
        title="Microsoft Excel"
        target="_blank"
      >
        <img
          src="/images/excel.png"
          height="33"
          style={{ position: "relative", top: "10px" }}
        />
      </a>
    ),
  },
];

const TechUsed = ({ items }) => {
  //loop through items passed
  const tech = items.map((item) => {
    const match = techList.find((tech) => tech.id === item);
    return match.elem;
  });
  return (
    <div className="TechUsed">
      <div>Technology Used:</div>
      <div>{tech}</div>
    </div>
  );
};

export default TechUsed;
