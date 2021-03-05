import PageProgress from "../components/site/PageProgress";
import TopNav from "../components/site/TopNav";
import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import ScrollToTopButton from "../components/site/ScrollToTopButton";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { AnimatePresence } from "framer-motion";

import "../styles/_app.scss";

import SlideShow from "../components/slideshow/SlideShow";
import UseScroll from "../hooks/useScroll";

const App = ({ Component, pageProps, router }) => {
  // handle page scroll bar at the top
  const [scroll, handleScroll] = UseScroll(router.route);

  return (
    <>
      <PageProgress scrollPercent={scroll.enabled ? scroll.amount : 0} />

      <TopNav />
      <AnimatePresence initial={false}>
        <AnimatedPageWrapper
          key={router.route}
          page={router.route}
          onScroll={handleScroll}
        >
          <Component {...pageProps} />
        </AnimatedPageWrapper>
      </AnimatePresence>
      <ScrollToTopButton />
      {/* <div id="image-gallery"></div> */}
      {/* <SlideShow /> */}
    </>
  );
};

export default App;
