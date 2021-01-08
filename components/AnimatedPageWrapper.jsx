import { motion } from "framer-motion";

import SiteFooter from "../components/site/SiteFooter";

const tDuration = 0.5;
const aDelay = 0.2;
const eDelay = 0;

const pageAnimationVariants = {
  start: {
    opacity: 0,
    y: "-50px",
    height: "120vh",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "100vh",
    transition: {
      duration: tDuration,
      delay: aDelay,
    },
  },
  exit: {
    opacity: 0,
    y: "-50px",
    height: "120vh",
    transition: {
      duration: tDuration,
      delay: eDelay,
    },
  },
};

const AnimatedPageWrapper = ({ page, children }) => {
  return (
    <motion.div
      className="AnimatedPageWrapper"
      key={page}
      initial="start"
      animate="animate"
      exit="exit"
      variants={pageAnimationVariants}
    >
      {children}

      <SiteFooter />
    </motion.div>
  );
};

export default AnimatedPageWrapper;
