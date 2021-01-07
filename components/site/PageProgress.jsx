import React from "react";

const PageProgress = ({ page }) => {
  let oldPage = null;
  let newPage = null;

  const bar = React.useRef();

  const handleScroll = () => {
    //pick the page we're scrolling on, old page on first load, new page on site navigation
    const pageToScroll = !newPage ? oldPage : newPage;

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
    const pages = document.querySelectorAll(".AnimatedPageWrapper");
    oldPage = pages[0];
    newPage = pages[1];

    if (!newPage) {
      oldPage.addEventListener("scroll", handleScroll);
    } else {
      oldPage.removeEventListener("scroll", handleScroll);
      newPage.addEventListener("scroll", handleScroll);
      bar.current.style.width = 0;
    }
    handleScroll();
  }, [page]);
  return (
    <div id="PageProgress">
      <div ref={bar}></div>
    </div>
  );
};

export default PageProgress;
