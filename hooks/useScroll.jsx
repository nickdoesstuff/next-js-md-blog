import React from "react";

const defaultScrollState = {
  amount: 0,
  enabled: true,
};

const useScroll = (page) => {
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
  }, [page]);

  return [scroll, handleScroll];
};

export default useScroll;
