import React from "react";

const PageProgress = ({ page }) => {
  let oldPage = null;
  let newPage = null;
  let pageToScroll = null;

  let isTransitioning = false;

  const bar = React.useRef();

  const handleScroll = () => {
    console.log("scrolling");
    if (isTransitioning) return;
    //pick the page we're scrolling on, old page on first load, new page on site navigation
    pageToScroll = !newPage ? oldPage : newPage;

    //if the page is short, there's nothing to scroll, set width to 100% & return
    if (pageToScroll.scrollHeight <= window.innerHeight) {
      bar.current.style.width = `100%`;
      return;
    }

    //amount of pixels that can be scrolled
    const scrollAmount = pageToScroll.scrollHeight - window.innerHeight;
    //percentage amount user has scrolled (0-100)
    const percentageScrolled = (pageToScroll.scrollTop / scrollAmount) * 100;

    bar.current.style.width = `${percentageScrolled}%`;
  };

  React.useEffect(() => {
    console.log("newpage");
    isTransitioning = true;
    const pages = document.querySelectorAll(".AnimatedPageWrapper");
    oldPage = pages[0];
    newPage = pages[1];

    if (!newPage) {
      oldPage.addEventListener("scroll", handleScroll);
    } else {
      oldPage.removeEventListener("scroll", handleScroll);
      newPage.addEventListener("scroll", handleScroll);
    }

    setTimeout(() => {
      isTransitioning = false;
      handleScroll();
    }, 500);

    bar.current.style.width = 0;
  }, [page]);
  return (
    <div id="PageProgress">
      <div ref={bar}></div>
    </div>
  );
};

export default PageProgress;
