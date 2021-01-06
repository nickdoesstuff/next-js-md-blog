const HomePageAboutNick = () => {
  return (
    <>
      <section className="container-fluid bg-primary">
        <div className="container text-white text-center pt-2">
          <h3>Howdy, I'm Nick. Nice to meet you.</h3>
          <div className="row">
            <div className="col-12 offset-0 col-md-8 offset-md-2 mt-3 px-4">
              {" "}
              <p>
                I've been making cool things for the web for over 15 years. From
                the early days of the web - geocities, email marketing, and
                flash-based games to NPM, React, Node, and today's modern dev
                tools - I haven't met a browser that could keep me down. I
                design with users in mind, take great care to always polish my
                pixels and skills, because the sites we visit and tools we use
                should delight us always.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div
        id="HomePage-purple-spacer"
        className="container-fluid bg-primary"
      ></div>
    </>
  );
};

export default HomePageAboutNick;
