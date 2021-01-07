import { getPortfolioItems } from "../../lib/portfolio";
import Link from "next/link";

import LinkCard from "../../components/LinkCard";

const PortfolioPage = ({ portfolioItems }) => {
  return (
    <section id="PortfolioPage" className="container-fluid bg-white mb-5 pb-5">
      <div className="container text-center">
        <h3>Portfoilo Work</h3>
        <div className="row">
          <div className="col-12 offset-0 col-lg-8 offset-lg-2">
            <h5 class="subtitle">
              Check out some of my work below. Feel free to filter based on what
              you're interested in.
            </h5>
          </div>
        </div>
        <div className="row mt-5 mb-5">
          {/* map over hope page portfolioItems */}
          {portfolioItems.map((item) => (
            <LinkCard key={item._id} card={item} />
          ))}
        </div>
        <div className="row mb-5">
          <div className="col text-center">
            <Link href="/portfolio">
              <a className="btn btn-outline-primary">See Full Portfolio</a>
            </Link>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
            <p className="subtitle">
              Looking for something specific?{" "}
              <a
                href="mailto:nickshelton1376@gmail.com"
                target="_blank"
                style={{ whiteSpace: "nowrap" }}
              >
                Email me.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps(context) {
  const portfolioItems = getPortfolioItems();
  return {
    props: {
      portfolioItems,
    },
  };
}

export default PortfolioPage;
