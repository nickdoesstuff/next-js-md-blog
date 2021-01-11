import UnderConstruction from "../components/UnderConstruction";

const ComingSoon = () => {
  return <UnderConstruction />;

  return (
    <section id="PortfolioPage" className="container-fluid bg-white mb-5 pb-5">
      <div className="container text-center">
        <h3>Portfolio Page</h3>
        <div className="row">
          <div className="col-12 offset-0 col-lg-8 offset-lg-2">
            <h5 class="subtitle">
              Subheading goes here...probably should be what is in card.
            </h5>
          </div>
        </div>
        <div className="row mt-5 mb-5">Something goes here...</div>
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

        <div className="row mt-5 mb-5">
          {/* map over hope page portfolioItems */}
          Add "Check out some similar projects", plus the cards.
          {/* {portfolioItems.map((item) => (
            <LinkCard key={item._id} card={item} />
          ))} */}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
