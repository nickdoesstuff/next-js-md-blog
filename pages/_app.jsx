import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import TopNav from "../components/site/TopNav";

import { AnimatePresence } from "framer-motion";

import "../styles/_app.scss";
import SiteFooter from "../components/site/SiteFooter";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <TopNav />
      {/* <AnimatePresence>
        <AnimatedPageWrapper key={router.route}> */}
      <Component {...pageProps} />
      {/* </AnimatedPageWrapper>
      </AnimatePresence> */}
      <SiteFooter />
    </>
  );
};

export default App;
