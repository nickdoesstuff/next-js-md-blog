import React from "react";
import { motion } from "framer-motion";

import SiteFooter from "../components/site/SiteFooter";

const tDuration = 0.5;
const aDelay = 0.2;
const eDelay = 0;

const pageAnimationVariants = {
  start: {
    opacity: 0,
    y: "-50px",
    height: "110%",
  },
  animate: {
    opacity: 1,
    y: 0,
    height: "100%",
    transition: {
      duration: tDuration,
      delay: aDelay,
    },
  },
  exit: {
    opacity: 0,
    y: "-50px",
    height: "110%",
    transition: {
      duration: tDuration,
      delay: eDelay,
    },
  },
};

const AnimatedPageWrapper = ({ page, children, onScroll }) => {
  //reference to the page
  const pageRef = React.useRef();

  const handleScroll = () => {
    if (pageRef.current.scrollHeight <= window.innerHeight) {
      setScrollPercent(100);
      return;
    }

    //amount of pixels that can be scrolled
    const scrollAmount = pageRef.current.scrollHeight - window.innerHeight;
    //percentage amount user has scrolled (0-100)
    const percentageScrolled = (pageRef.current.scrollTop / scrollAmount) * 100;
    onScroll(percentageScrolled);
  };

  React.useEffect(() => {
    pageRef.current.addEventListener("scroll", handleScroll);
    return () => {
      pageRef.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // React.useEffect(() => {
  //   console.log(page);
  // }, [page]);

  return (
    <>
      <motion.div
        ref={pageRef}
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
    </>
  );
};

export default AnimatedPageWrapper;
