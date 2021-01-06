import GlassesLogo from "../logos/GlassesLogo";
import NextLogo from "../logos/NextLogo";
import SassLogo from "../logos/SassLogo";
import HeartIcon from "../logos/HeartIcon";
import NodeLogo from "../logos/NodeLogo";

const SiteFooter = () => {
  return (
    <div id="Site_Footer" className="container-fluid bg-primary py-5">
      <div className="container text-white">
        <div className="row">
          <div className="col text-center pb-3">
            <GlassesLogo color="#FFF" />
          </div>
        </div>
        <div className="row py-3">
          <div className="col-12 offset-0 col-md-6 offset-md-3 text-center px-5">
            <h6 className="subtitle">
              You can make anything happen on the web with some nerds and a
              little bit of elbow grease.
            </h6>
          </div>
        </div>
        <div id="Site_Footer-social" className="row py-3">
          <a href="https://github.com/nickdoesstuff" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/nickdoesstuff/" target="_blank">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://twitter.com/nick_shelton" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/c/nashelto/videos" target="_blank">
            <i className="fab fa-youtube"></i>
          </a>
          <a href="mailto:nickshelton1376@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <div className="row">
          <div className="col text-center py-3">
            <p id="Site_Footer-craftedBy" className="py-3">
              Handcrafted by Nick in {new Date().getFullYear()}
            </p>
            <div className="row">
              <div className="col-12 offset-0 rounded col-md-4 offset-md-4 bg-light pb-3 text-dark">
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
      </div>
    </div>
  );
};

export default SiteFooter;
