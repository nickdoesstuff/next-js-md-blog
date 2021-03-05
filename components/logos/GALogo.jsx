const GALogo = ({ width = 125.4, height = 126.6, scale = 1 }) => {
  const yellow = "#FFC517";
  const orange = "#F57E02";
  const darkOrange = "#ee7406";

  return (
    <svg
      width={width * scale}
      height={height * scale}
      viewBox="0 0 125.4 126.6"
    >
      <path
        className="st0"
        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: yellow }}
        d="M56.9,126H10.3C4.6,126,0,121.4,0,115.7V93.4C0,87.6,4.6,83,10.3,83h29.4V50.4c0-5.7,4.6-10.3,10.3-10.3h32.6
		v86L56.9,126L56.9,126z"
      />
      <path
        className="st1"
        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: orange }}
        d="M115.4,126H82.7V10.7c0-5.7,4.6-10.3,10.3-10.3h22.3c5.7,0,10.3,4.6,10.3,10.3v105
		C125.4,121.4,120.8,126,115.4,126z"
      />
      <path
        className="st2"
        style={{ fillRule: "evenodd", clipRule: "evenodd", fill: darkOrange }}
        d="M125.4,83v32.6c0,5.7-4.6,10.3-10.3,10.3l0,0H82.4V40L125.4,83z"
      />
    </svg>
  );
};

export default GALogo;
