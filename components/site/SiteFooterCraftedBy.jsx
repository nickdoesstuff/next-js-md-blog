import NextLogo from "../logos/NextLogo";
import SassLogo from "../logos/SassLogo";
import HeartIcon from "../logos/HeartIcon";
import NodeLogo from "../logos/NodeLogo";

const SiteFooterCraftedBy = () => {
  return (
    <div className="row">
      <div className="col text-center py-3">
        <p id="Site_Footer-craftedBy" className="py-3">
          Handcrafted by Nick in {new Date().getFullYear()}
        </p>
        <div className="row">
          <div className="BuiltUsing col-12 offset-0 rounded col-md-4 offset-md-4 bg-light pb-3 text-dark">
            <div id="Site_Footer-built-with-text">
              Built with <HeartIcon scale={0.6} /> using:
            </div>
            <div id="Site_Footer-built-with">
              <a href="https://nextjs.org/" target="_blank">
                <NextLogo scale={0.15} />
              </a>
              <a href="https://reactjs.org/" target="_blank">
                <i className="fab fa-react"></i>
              </a>
              <a href="https://sass-lang.com/" target="_blank">
                <SassLogo scale={0.09} />
              </a>
              <a href="https://nodejs.org/en/" target="_blank">
                <NodeLogo scale={0.13} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteFooterCraftedBy;
