import SlideShowItem from "./SlideShowItem";

const images = [
  {
    img:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "nerd programming image",
    caption: "blah blah blah",
    width: 1260,
    height: 750,
  },
  {
    img:
      "https://images.pexels.com/photos/102061/pexels-photo-102061.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "nerd programming image",
    caption: "blah blah blah",
    width: 1280,
    height: 1706,
  },
  {
    img:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "nerd programming image",
    caption: "blah blah blah",
  },
  {
    img:
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "nerd programming image",
    caption: "blah blah blah",
  },
];

const SlideShow = () => {
  const [slide, setSlide] = React.useState(1);

  const changeSlide = (newSlide) => {
    console.log(newSlide);
    setSlide(newSlide);
  };

  const style = {
    transform: `translateX(-${(slide - 1) * 100}vw)`,
    width: `${100 * images.length}vw`,
  };

  return (
    <div className="SlideShow">
      <div className="SlideShow-wrapper" style={style}>
        {images.map((image, idx) => (
          <SlideShowItem key={idx} slideNum={idx} {...image} />
        ))}
      </div>
      <div className="SlideShow-buttons">
        <button
          onClick={() => changeSlide(slide - 1)}
          class="fas fa-arrow-circle-left"
          disabled={slide === 1}
        ></button>
        <button
          onClick={() => changeSlide(slide + 1)}
          class="fas fa-arrow-circle-right"
          disabled={slide >= images.length}
        ></button>
      </div>
    </div>
  );
};

export default SlideShow;
