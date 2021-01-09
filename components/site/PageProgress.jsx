import React from "react";

const PageProgress = ({ scrollPercent }) => {
  return (
    <div className="PageProgress">
      <div style={{ width: `${scrollPercent}%` }}></div>
    </div>
  );
};

export default PageProgress;
