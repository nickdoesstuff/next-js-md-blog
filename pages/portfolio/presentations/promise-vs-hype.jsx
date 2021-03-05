import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: "ondemand",
    arrows: true,
  };

  const numSlides = 114;

  const slides = [];

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <img
        key={i}
        src={`/images/pages/presentations/Tech/Slide${i}.JPG`}
        alt={`slide ${i}`}
      />
    );
  }

  return <Slider {...settings}>{slides}</Slider>;
}

const PortfolioPage = ({ portfolioItem }) => {
  const [galleryShowing, setGalleryShowing] = React.useState(false);

  // const { title, subtitle, tech, roles } = portfolioItem;

  return (
    <section>
      <div className="bg-dark container-fluid mt-5 pt-5 pb-5 px-5">
        <div className="bg-danger p-2 rounded text-white text-center mb-4 container">
          I'm working on updating the slide component to reduce
          flickering...check back soon for an improved experience!
        </div>
        <div className="container">
          <SimpleSlider />
        </div>
      </div>
      <div className="container mt-5 mb-5 pb-5">
        <div className="row">
          <div className="col">
            <p className="pb-3">
              I love teaching and presenting information. Nothing is cooler than
              to learn things, make them spark your imagination, and then to
              further your learning by sparking the same thing in an audience.
            </p>
            <hr />
            <div className="bg-info p-2 rounded text-white text-center mb-5 mt-5">
              his prestation was given at the ATD-ICE conference in 2018.
            </div>
            <h4>Presentation Highlights:</h4>
            <ul>
              <li>Identifying when to reach for new technology</li>
              <li>Tools to help you evaluate tech</li>
              <li>
                Examples of utilizing the tools for tech evaluation on current
                industry tools
              </li>
              <li>Trends & predications for the rest of the year</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

// export async function getStaticProps(context) {
//   const portfolioItem = getPortfolioItemById(itemId);
//   return {
//     props: {
//       portfolioItem,
//     },
//   };
// }

export default PortfolioPage;
