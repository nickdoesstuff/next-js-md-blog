const HeartIcon = ({
  width = 30.849,
  height = 28.567,
  scale = 1,
  color = "#dc3545",
  style = {},
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width * scale}
      height={height * scale}
      viewBox={`0 0 ${width * scale} ${height * scale}`}
      viewBox="0 0 30.849 28.567"
      style={style}
    >
      <path
        id="Icon_metro-heart"
        data-name="Icon metro-heart"
        d="M25.321,3.856c-3.242,0-6.033,2.638-7.325,5.392C16.7,6.494,13.911,3.856,10.669,3.856a8.1,8.1,0,0,0-8.1,8.1c0,9.093,9.173,11.478,15.425,20.468C23.9,23.488,33.419,20.758,33.419,11.955A8.1,8.1,0,0,0,25.321,3.856Z"
        transform="translate(-2.571 -3.856)"
        fill={color}
      />
    </svg>
  );
};

export default HeartIcon;
