const HomePageProjectCTA = () => {
  return (
    <article id="HomePage-start-project" className="container-fluid bg-primary">
      <div className="container">
        <div className="card text-white">
          <div className="row text-center">
            <div className="col-12 col-lg-4 my-2">
              <h4>Start a project</h4>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <p>
                Interested in working together? <br /> We should chat!
              </p>
            </div>
            <div className="col-12 col-lg-4 my-2">
              <a
                href="mailto:nickshelton1376@gmail.com"
                className="btn btn-outline-primary text-white"
              >
                Let's kick the tires!
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default HomePageProjectCTA;
