import PageProgress from "../components/site/PageProgress";
import TopNav from "../components/site/TopNav";
import AnimatedPageWrapper from "../components/AnimatedPageWrapper";
import ScrollToTopButton from "../components/site/ScrollToTopButton";

import { AnimatePresence } from "framer-motion";

import "../styles/_app.scss";

const defaultScrollState = {
  amount: 0,
  enabled: false,
};

const App = ({ Component, pageProps, router }) => {
  //used to set state of ScrollAmount
  const [scroll, setScroll] = React.useState(defaultScrollState);

  const handleScroll = (percentOfPageScrolled) => {
    if (scroll.enabled) {
      setScroll((prevState) => {
        return {
          amount: percentOfPageScrolled,
          enabled: prevState.enabled,
        };
      });
    }
  };

  React.useEffect(() => {
    setScroll({ enabled: false, amount: 0 });
    setTimeout(() => setScroll({ enabled: true, amount: 0 }), 500);
  }, [router.route]);

  return (
    <>
      <PageProgress scrollPercent={scroll.amount} />
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
    </>
  );
};

export default App;
