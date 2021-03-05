const GSheetsLogo = ({ width = 390, height = 512, scale = 1 }) => {
  const color1 = "#59C36A";
  const color2 = "#00A66C";
  const color3 = "#FFF5F5";
  const color4 = "#E3E7EA";
  const color5 = "#A0DEB0";

  return (
    <svg width={width * scale} height={height * scale} viewBox="0 0 390 512">
      <path
        style={{ fill: color1 }}
        d="M390,135l-105-30L255,0H30C13.4,0,0,13.4,0,30v452c0,16.6,13.4,30,30,30h330c16.6,0,30-13.4,30-30V135z"
      />
      <path
        style={{ fill: color2 }}
        d="M390,135v347c0,16.6-13.4,30-30,30H197.4V0H255l30,105L390,135z"
      />
      <path
        style={{ fill: color3 }}
        d="M285,211H105c-8.3,0-15,6.7-15,15v180c0,8.3,6.7,15,15,15h180c8.3,0,15-6.7,15-15V226
		C300,217.7,293.3,211,285,211z M120,301h60v30h-60V301z M210,301h60v30h-60V301z M270,271h-60v-30h60V271z M180,241v30h-60v-30H180
		z M120,361h60v30h-60V361z M210,391v-30h60v30H210z"
      />
      <path
        style={{ fill: color4 }}
        d="M285,211h-87.6v210H285c8.3,0,15-6.7,15-15V226C300,217.7,293.3,211,285,211z M270,391h-60v-30h60V391z
		 M270,331h-60v-30h60V331z M270,271h-60v-30h60V271z"
      />
      <path
        style={{ fill: color5 }}
        d="M390,135H285c-16.5,0-30-13.5-30-30V0c3.9,0,7.8,1.5,10.5,4.5l120,120C388.5,127.2,390,131.1,390,135z"
      />
    </svg>
  );
};

export default GSheetsLogo;
