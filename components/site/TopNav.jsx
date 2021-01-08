import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlassesLogo from "../logos/GlassesLogo";
import TopNavLinks from "./TopNavLinks";

import animateScrollTo from "animated-scroll-to";

import { useRouter } from "next/router";

const TopNav = () => {
  const { pathname } = useRouter();

  const [page, setPage] = useState("/");

  useEffect(() => {
    setPage(pathname);
  }, [pathname]);

  const [mobileNavOpen, setMobileNavOpen] = React.useState(false);

  const openNav = () => {
    document.querySelector("body").classList.add("nav-open");
    setMobileNavOpen(true);
  };
  const closeNav = () => {
    document.querySelector("body").classList.remove("nav-open");
    setMobileNavOpen(false);
  };

  //scrolls to top when passed path current page
  //if you don't pass a pathToMatch, it always scrolls
  const scrollToTop = (pathToMatch) => {
    const elementToScroll = document.querySelector(".AnimatedPageWrapper");
    if (page === pathToMatch || !pathToMatch) {
      animateScrollTo(0, { elementToScroll, maxDuration: 1000 });
    }
  };

  return (
    <nav className="TopNav navbar navbar-inverse navbar-expand fixed-top shadow-sm">
      <div className="container">
        <Link href="/">
          <a onClick={() => scrollToTop("/")} className="navbar-brand">
            <GlassesLogo />
          </a>
        </Link>
        <div onClick={openNav} className="TopNav-hamburger">
          <i className="fas fa-bars d-inline-block mr-3 d-md-none"></i>
        </div>
        <div
          onClick={closeNav}
          className={`TopNav-overlay d-fixed d-md-none ${
            mobileNavOpen ? "isOpen" : ""
          }`}
        ></div>
        <TopNavLinks
          scrollToTop={scrollToTop}
          page={page}
          className={"d-none d-md-flex desktop"}
        />
        <TopNavLinks
          scrollToTop={scrollToTop}
          page={page}
          closeNav={closeNav}
          className={`d-flex d-md-none mobile ${mobileNavOpen ? "isOpen" : ""}`}
        />
      </div>
    </nav>
  );
};

export default TopNav;
