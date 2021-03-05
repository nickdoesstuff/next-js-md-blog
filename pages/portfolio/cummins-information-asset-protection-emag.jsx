import { getPortfolioItemById } from "../../lib/portfolio";

import PortfolioItemHeader from "../../components/pages/Portfolio/PortfolioItemHeader";

const itemId = "ddb9da7e-5031-11eb-ae93-2342397afsdf";

const PortfolioPage = ({ portfolioItem }) => {
  const [galleryShowing, setGalleryShowing] = React.useState(false);

  const { title, subtitle, tech, roles } = portfolioItem;

  return (
    <section id="PortfolioArticle">
      <PortfolioItemHeader
        {...portfolioItem}
        video="/video/cummins_laptop.mp4"
        smallText
      />

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>App Overview</h4>
            <p>
              This app was developed utilizing primarily Backbone and jQuery and
              built to serve as an information portal for various components of
              Cummins training. The application also leveraged LESS CSS
              preprocessing to allow for quick rebranding and theming of the
              “emag”. Overall, we developed 5-7 versions of these resources’
              libraries utilizing my framework to facilitate different training
              initiatives.
            </p>
            <p>
              This app came early in the life-cycle of the eMag development, so
              is slightly not as polished as future versions (similar to the one
              in my Roche sample). I didn’t get much budget for these, but I’d
              work my tail off to have a little extra time to add one new
              feature, or one new area of polish each time we sold one of these.
            </p>
            <p>
              LESS variables would allow rebranding of the entire application in
              seconds, allowing us to focus on custom content creation for each
              version of the application.
            </p>
            <p>
              Not the sexiest thing in the world, but with the routing, bookmark
              ability, subtle animation, and other various components, it was
              something that would help sell projects as a value add, in that we
              could create them for a few days of dev effort.
            </p>

            {/* <img
              src="/images/pages/portfolio/jhu/search.png"
              alt="search"
              className="img-thumbnail img-fluid"
              style={{ width: "100%" }}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps(context) {
  const portfolioItem = getPortfolioItemById(itemId);
  return {
    props: {
      portfolioItem,
    },
  };
}

export default PortfolioPage;
