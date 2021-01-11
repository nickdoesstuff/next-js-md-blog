import React, { useState, useEffect } from "react";
import Link from "next/link";
import GlassesLogo from "../logos/GlassesLogo";
import TopNavLinks from "./TopNavLinks";
import { scrollToTop } from "../../lib/scrollToTop";

import { useRouter } from "next/router";
import HoverItem from "../hoc/HoverItem";

const TopNav = () => {
  const { pathname } = useRouter();

  const [page, setPage] = useState("/");

  useEffect(() => {
    setPage(pathname);
  }, [pathname]);

  const [mobileNavOpen, setMobileNavOpen] = React.useState("");

  const openNav = () => {
    document.querySelector("body").classList.add("nav-open");
    setMobileNavOpen("opening");
    setTimeout(() => setMobileNavOpen("isOpen"), 1);
  };
  const closeNav = () => {
    document.querySelector("body").classList.remove("nav-open");
    setMobileNavOpen("closing");
    setTimeout(() => setMobileNavOpen(""), 200);
  };

  const handleScroll = (pathToMatch) => {
    if (pathToMatch === pathname) scrollToTop();
  };

  return (
    <nav className="TopNav navbar navbar-inverse navbar-expand fixed-top shadow-sm">
      <div className="container">
        <Link href="/">
          <a onClick={() => handleScroll("/")} className="navbar-brand">
            <HoverItem>
              <GlassesLogo />
            </HoverItem>
          </a>
        </Link>
        <div onClick={openNav} className="TopNav-hamburger">
          <i className="fas fa-bars d-inline-block mr-3 d-md-none"></i>
        </div>
        <div
          onClick={closeNav}
          className={`TopNav-overlay d-fixed d-md-none ${mobileNavOpen}`}
        ></div>
        <TopNavLinks
          handleScroll={handleScroll}
          page={page}
          className={"d-none d-md-flex desktop"}
        />
        <TopNavLinks
          handleScroll={handleScroll}
          page={page}
          closeNav={closeNav}
          className={`d-flex d-md-none mobile ${mobileNavOpen}`}
        />
      </div>
    </nav>
  );
};

export default TopNav;
