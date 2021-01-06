import LinkCard from "../../LinkCard";
import Link from "next/link";

const HomePagePortfolio = () => {
  const linkText = "Check it out";

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
          <LinkCard
            bgImage="/images/pages/portfolio/dormakaba_bg.jpg"
            image="/images/pages/portfolio/logos/dormakaba_white_red.png"
          >
            <h5 className="bg-light text-dark px-2 rounded">
              Dormakaba Market Masters
            </h5>
            <div className="row">
              Mobile-first responsive game built to give dormakaba employees
              training on new branding nomeclature.
            </div>
            <Link href="/portfolio">
              <a className="btn btn-sm btn-outline-dark text-white border border-white">
                {linkText}
              </a>
            </Link>
          </LinkCard>
          <LinkCard
            color="#C61425"
            bgImage="/images/pages/portfolio/lilly_bg.jpg"
            image="/images/pages/portfolio/logos/lilly_white.png"
          >
            <h5 className="bg-light text-dark px-2 rounded">
              Dormakaba Market Masters
            </h5>
            <div className="row">
              Mobile-first responsive game built to give dormakaba employees
              training on new branding nomeclature.
            </div>

            <Link href="/portfolio">
              <a className="btn btn-sm btn-outline-dark text-white border border-white">
                {linkText}
              </a>
            </Link>
          </LinkCard>
          <LinkCard
            color="#17A2B8"
            bgImage="/images/pages/portfolio/spectrum_bg.jpg"
            image="/images/pages/portfolio/logos/spectrum_white.png"
          >
            <h5 className="bg-light text-dark px-2 rounded">
              Dormakaba Market Masters
            </h5>
            <div className="row">
              Mobile-first responsive game built to give dormakaba employees
              training on new branding nomeclature.
            </div>

            <Link href="/portfolio">
              <a className="btn btn-sm btn-outline-dark text-white border border-white">
                {linkText}
              </a>
            </Link>
          </LinkCard>
          <LinkCard
            color="#C31627"
            bgImage="/images/pages/portfolio/cummins_bg.jpg"
            image="/images/pages/portfolio/logos/cummins_white.png"
          >
            <h5 className="bg-light text-dark px-2 rounded">
              Dormakaba Market Masters
            </h5>
            <div className="row">
              Mobile-first responsive game built to give dormakaba employees
              training on new branding nomeclature.
            </div>

            <Link href="/portfolio">
              <a className="btn btn-sm btn-outline-dark text-white border border-white">
                {linkText}
              </a>
            </Link>
          </LinkCard>
          <LinkCard
            color="#FFC107"
            bgImage="/images/pages/portfolio/jh_bg.jpg"
            image="/images/pages/portfolio/logos/johns_hopkins_white.png"
          >
            <h5 className="bg-light text-dark px-2 rounded">
              Dormakaba Market Masters
            </h5>
            <div className="row">
              Mobile-first responsive game built to give dormakaba employees
              training on new branding nomeclature.
            </div>

            <Link href="/portfolio">
              <a className="btn btn-sm btn-outline-dark text-white border border-white">
                {linkText}
              </a>
            </Link>
          </LinkCard>
          <LinkCard
            color="#2B81DD"
            bgImage="/images/pages/portfolio/roche_bg.jpg"
            image="/images/pages/portfolio/logos/roche_white.png"
          >
            <h5 className="bg-light text-dark px-2 rounded">
              Dormakaba Market Masters
            </h5>
            <div className="row">
              Mobile-first responsive game built to give dormakaba employees
              training on new branding nomeclature.
            </div>

            <Link href="/portfolio">
              <a className="btn btn-sm btn-outline-dark text-white border border-white">
                {linkText}
              </a>
            </Link>
          </LinkCard>
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
