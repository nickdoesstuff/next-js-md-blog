import { scrollToTop } from "../../lib/scrollToTop";
import { motion } from "framer-motion";

const ScrollToTopButton = () => {
  const [isActive, setIsActive] = React.useState(false);

  const activate = () => {
    setIsActive(true);
  };

  const deactivate = () => {
    setIsActive(false);
  };

  const handleClick = () => {
    scrollToTop();
    deactivate();
  };

  return (
    <motion.div
      onTouchStart={activate}
      onMouseEnter={activate}
      onMouseLeave={deactivate}
      onTouchMove={deactivate}
      onClick={handleClick}
      class={`ScrollToTopButton  ${isActive ? "active" : ""}`}
    >
      <i className="fas fa-arrow-up"></i>
    </motion.div>
  );
};

export default ScrollToTopButton;
