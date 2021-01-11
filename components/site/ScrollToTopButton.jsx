import { scrollToTop } from "../../lib/scrollToTop";
import { motion } from "framer-motion";
import HoverItem from "../hoc/HoverItem";

const ScrollToTopButton = () => {
  const handleClick = () => {
    scrollToTop();
  };

  return (
    <HoverItem className="ScrollToTopButton" onClick={handleClick}>
      <i className="fas fa-arrow-up"></i>
    </HoverItem>
  );
};

export default ScrollToTopButton;
