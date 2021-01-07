import { motion } from "framer-motion";

import SiteFooter from "../components/site/SiteFooter";

const tDuration = 0.5;
const aDelay = 0.2;
const eDelay = 0;

const pageAnimationVariants = {
  start: {
    opacity: 0,
    y: "-50px",
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: tDuration,
      delay: aDelay,
    },
  },
  exit: {
    opacity: 0,
    y: "-50px",
    transition: {
      duration: tDuration,
      delay: eDelay,
    },
  },
};

const AnimatedPageWrapper = ({ page, children }) => {
  // React.useEffect(() => {
  //   const newPage = document.getElementById(`PageWrapper-${page}`);
  //   const newPageHeight = newPage.clientHeight;
  //   document.body.style.height = `${newPageHeight}px`;
  // }, [page]);

  return (
    <motion.div
      // id={`AnimatedPageWrapper-${page}`}
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
