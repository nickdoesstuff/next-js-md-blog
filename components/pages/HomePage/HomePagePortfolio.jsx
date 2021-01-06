import Link from "next/link";

import LinkCard from "../../LinkCard";

const HomePagePortfolio = ({ portfolioItems }) => {
  return (
    <section
      id="HomePage-portfolio"
      className="container-fluid bg-white mb-5 pb-5"
    >
      <div className="container text-center">
        <h3>Project Work</h3>
        <h5 class="subtitle">
          I've worked on so many things over the years... Here are a few cool
          ones.
        </h5>
        <div className="row mt-5 pt-3 mb-5">
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

export default HomePagePortfolio;
