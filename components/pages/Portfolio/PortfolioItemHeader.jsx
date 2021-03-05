import MyRole from "./MyRole";
import TechUsed from "./TechUsed";

const PortfolioItemHeader = ({
  lead,
  title,
  subtitle,
  tech,
  roles,
  bgImage,
  color,
  style = { backgroundColor: "#641fed " },
  video = undefined,
  smallText = undefined,
}) => {
  const textAreaClasses = smallText
    ? "smallText col-12 col-lg-6 pt-5 mt-3 text-light"
    : "col-12 col-lg-7 pt-5 mt-3 pr-3 pr-lg-5 text-light";

  const videoAreaClasses = smallText
    ? "smallTextVideo col-12 col-lg-6 text-center mb-0 px-0 pb-0 mt-5 flex-column align-self-end"
    : "col-12 col-lg-5 text-center mb-0 pb-0 mt-5 flex-column align-self-end";

  return (
    <div className="PortfolioArticle-header container-fluid" style={style}>
      <div className="container">
        <div className="row">
          <div className={textAreaClasses}>
            <h2>{title}</h2>
            <p className="lead">{lead}</p>
            <hr />
            <TechUsed items={tech} />
            <hr />
            <MyRole roles={roles} />
          </div>
          <div className={videoAreaClasses}>
            {video && (
              <video playsInline src={video} autoPlay loop muted></video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItemHeader;
