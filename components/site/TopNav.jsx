import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlassesLogo from "../logos/GlassesLogo";
import TopNavLinks from "./TopNavLinks";

import { useRouter } from "next/router";

const TopNav = () => {
  const { pathname } = useRouter();

  const [page, setPage] = useState("home");

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

  const scrollToTop = () => {
    if (page === "/") {
      document.querySelector(".AnimatedPageWrapper").scrollTop = 0;
    }
  };

  return (
    <nav className="TopNav navbar navbar-inverse navbar-expand fixed-top shadow-sm">
      <div className="container">
        <Link href="/">
          <a onClick={scrollToTop} className="navbar-brand">
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
        <TopNavLinks page={page} className={"d-none d-md-flex desktop"} />
        <TopNavLinks
          page={page}
          closeNav={closeNav}
          className={`d-flex d-md-none mobile ${mobileNavOpen ? "isOpen" : ""}`}
        />
      </div>
    </nav>
  );
};

export default TopNav;
