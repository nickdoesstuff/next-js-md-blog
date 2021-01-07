import HeartIcon from "../../logos/HeartIcon";

const HomePageHero = () => {
  return (
    <section id="HomePage-hero" className="container-fluid">
      <div className="container text-center">
        <h1>
          <span>Design.</span> <span>Develop.</span> <span>Create.</span>
        </h1>
        <h2 className="subtitle">
          I design and code experiences that{" "}
          <span className="text-nowrap">
            {" "}
            users <HeartIcon />
          </span>
        </h2>
      </div>
    </section>
  );
};

export default HomePageHero;
