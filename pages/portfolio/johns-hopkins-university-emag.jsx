import { getPortfolioItemById } from "../../lib/portfolio";

import PortfolioItemHeader from "../../components/pages/Portfolio/PortfolioItemHeader";

const itemId = "ddb9da7e-5031-11eb-ae93-234asfas087";

const PortfolioPage = ({ portfolioItem }) => {
  const [galleryShowing, setGalleryShowing] = React.useState(false);

  const { title, subtitle, tech, roles } = portfolioItem;

  return (
    <section id="PortfolioArticle">
      <PortfolioItemHeader
        {...portfolioItem}
        video="/video/jhu_laptop.mp4"
        smallText
      />

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>App Overview</h4>
            <p>
              This app was developed utilizing primarily Backbone and jQuery and
              built to serve as an information portal for various components of
              Johns Hopkins University (JHU) training. The application also
              leveraged LESS CSS preprocessing to allow for quick rebranding and
              theming of the “emag”. Overall, we developed 3 versions of these
              resources’ libraries utilizing my framework to facilitate
              different training initiatives.
            </p>
            <p>
              This app came in the middle of the life-cycle of the eMag
              development, so is slightly nicer than previous versions (like the
              one in my Roche sample). I didn’t get much budget for these, but
              I’d work my tail off to have a little extra time to add one new
              feature, or one new area of polish each time we sold one of these.
            </p>

            <p>
              LESS variables would allow rebranding of the entire application in
              seconds, allowing us to focus on custom content creation for each
              version of the application. I especially like the search
              functionality of this app… you can press “s” at anytime to search,
              escape to clear your search, escape again to close search. It’s
              the type of thing only power users can appreciate, but boy did it
              make me giddy.
            </p>
            <img
              src="/images/pages/portfolio/jhu/search.png"
              alt="search"
              className="img-thumbnail img-fluid"
              style={{ width: "100%" }}
            />
            <p>
              This app and the other versions we created for JHU had a lot of
              one-off micro interactions which were typically something I’d
              dream up and program in a couple of hours, per budgets.
            </p>
            <p>
              Not the sexiest thing in the world, but with the routing, bookmark
              ability, subtle animation, and other various components, it was
              something that would help sell projects as a value add, in that we
              could create them for a few days of dev effort.
            </p>
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
