const allRoles = [
  {
    id: "tech",
    title: "Technical Strategist",
  },
  {
    id: "software",
    title: "Software Development",
  },
  {
    id: "ux",
    title: "User Experience Design",
  },
  {
    id: "ui",
    title: "User Interface Design",
  },
  {
    id: "ux/ui",
    title: "UX/UI Design/Lead",
  },
  {
    id: "graphics",
    title: "Graphic Design",
  },
  {
    id: "pm",
    title: "Project Management",
  },
  {
    id: "qa",
    title: "QA Lead",
  },
];

const MyRole = ({ roles }) => {
  const myRole = roles.map((role) => {
    const myRole = allRoles.find((r) => r.id === role);
    return myRole.title;
  });
  return (
    <div className="MyRole">
      <div className="PortfolioInfo_title">My Role(s):</div>
      <div>
        {myRole.map((role) => (
          <span key={role} className="badge badge-danger">
            {role}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MyRole;
