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
        src={`/images/pages/presentations/Storyline/Slide${i}.JPG`}
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
              This prestation was given at the ATD-CIC Tech Summit in 2017.
            </div>
            <h4>Presentation Highlights:</h4>
            <ul>
              <li>The benefits of using interactive video</li>
              <li>
                How to leverage a YouTube mindset to shoot video at low cost
              </li>
              <li>
                Tips & Tricks for scripting, shooting, editing, and programming
              </li>
              <li>Examples of interactive video scenarios made cheaply</li>
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
