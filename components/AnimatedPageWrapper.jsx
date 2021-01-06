import { motion, AnimatePresence } from "framer-motion";
import { Container } from "react-bootstrap";

import pageStyles from "../styles/page.module.css";

const tDuration = 0.5;
const aDelay = 0.2;
const eDelay = 0;

const pageAnimationVariants = {
  start: {
    opacity: 0,
    scale: 1.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: tDuration,
      delay: aDelay,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    overflow: "hidden",
    transition: {
      duration: tDuration,
      delay: eDelay,
    },
  },
};

const AnimatedPageWrapper = ({ key, children }) => {
  return (
    <motion.div
      className="AnimatedPageWrapper"
      key={key}
      initial="start"
      animate="animate"
      exit="exit"
      variants={pageAnimationVariants}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPageWrapper;
