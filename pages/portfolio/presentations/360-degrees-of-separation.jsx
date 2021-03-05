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

  const numSlides = 115;

  const slides = [];

  for (let i = 1; i <= numSlides; i++) {
    slides.push(
      <img
        key={i}
        src={`/images/pages/presentations/360/Slide${i}.JPG`}
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
              This prestation was given at the ATD-ICE conference in 2019 and
              ExLearn in 2019.
            </div>
            <h4>Presentation Highlights:</h4>
            <ul>
              <li>The State of VR in the Training Industry</li>
              <li>
                An overview of 360° video, what it is, and how how it can be
                produced
              </li>
              <li>Tools to help make 360° video interactive</li>
              <li>
                Ideation on some ways 360° video can be leveraged as an
                entry-point to VR
              </li>
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
