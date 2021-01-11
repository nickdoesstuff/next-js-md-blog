import React from "react";
import { motion } from "framer-motion";

const HoverItem = ({ children, className = "hover-item", onClick }) => {
  const [isActive, setIsActive] = React.useState(false);

  const activate = () => {
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    deactivate();
  };

  return (
    <motion.div
      onTouchStart={activate}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onTouchMove={deactivate}
      onClick={handleClick}
      className={`${className} ${isActive ? "active" : ""}`}
    >
      {children}
    </motion.div>
  );
};

export default HoverItem;
