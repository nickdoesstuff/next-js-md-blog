import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import TopNav from "../components/site/TopNav";
import PageProgress from "../components/site/PageProgress";

import { AnimatePresence } from "framer-motion";

import "../styles/_app.scss";

const App = ({ Component, pageProps, router }) => {
  return (
    <>
      <PageProgress page={router.route} />
      <TopNav />
      <AnimatePresence initial={false}>
        <AnimatedPageWrapper key={router.route} page={router.route}>
          <Component {...pageProps} />
        </AnimatedPageWrapper>
      </AnimatePresence>
    </>
  );
};

export default App;
