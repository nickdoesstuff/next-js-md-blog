const HomePageConferencePresentations = () => {
  return (
    <section>
      <article className="container-fluid bg-info text-center text-white py-5">
        <div className="container py-3">
          <h3>Conference Presentations</h3>
          <div className="col-12 offset-0 col-md-8 offset-md-2 mt-3 px-4">
            <p>
              I'm a bit of a nerd. I enjoy sharing cool new ideas, techniques,
              and technologies just as much as I love to learn. The best thing
              is seeing someone get excited by a new idea.{" "}
            </p>
            <p>My wife tells me I should be a teacher.</p>
          </div>
        </div>
      </article>

      <div id="HomePage-teal-spacer" className="container-fluid bg-info"></div>

      <article id="HomePage-presentations" className="container-fluid bg-white">
        <div className="container">
          <div className="row mt-5 pt-3">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">Presentation Item 1</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">Presentation Item 2</div>
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-body">Presentation Item 3</div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomePageConferencePresentations;
