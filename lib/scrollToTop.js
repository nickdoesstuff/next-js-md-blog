import animateScrollTo from "animated-scroll-to";

//scrolls to top when passed path current page
//if you don't pass a pathToMatch, it always scrolls
export const scrollToTop = () => {
  const elementToScroll = document.querySelector(".AnimatedPageWrapper");
  animateScrollTo(0, { elementToScroll, maxDuration: 1000 });
};
