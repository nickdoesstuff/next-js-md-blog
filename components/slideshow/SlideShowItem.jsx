const SlideShowItem = ({ img, alt, caption, slideNum, width, height }) => {
  const itemStyle = { transform: `translateX(${slideNum * 100}vw)` };
  const bgImage = { backgroundImage: `url('${img}')` };
  const imgClass = width > height ? "wide" : "tall";

  return (
    <>
      <div className="SlideShow-item" style={itemStyle}>
        <div className="SlideShow-background" style={bgImage} />
        <div className="SlideShow-container">
          <img src={img} alt={alt} className={imgClass} />
        </div>
      </div>
    </>
  );
};

export default SlideShowItem;
