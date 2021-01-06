import Link from "next/link";
import GlassesLogo from "../logos/GlassesLogo";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const TopNav = () => {
  const { pathname } = useRouter();

  const [page, setPage] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setPage("blog");
    } else if (pathname.includes("/portfolio")) {
      setPage("portfolio");
    } else {
      setPage("home");
    }
  }, [pathname]);

  const openNav = () => {
    document.querySelector("body").classList.add("nav-open");
    setIsOpen(true);
  };
  const closeNav = () => {
    document.querySelector("body").classList.remove("nav-open");
    setIsOpen(false);
  };

  return (
    <>
      <nav
        className={`TopNav navbar navbar-inverse navbar-expand fixed-top shadow-sm ${
          isOpen ? "is-open" : ""
        }`}
      >
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">
              <GlassesLogo />
            </a>
          </Link>
          <div className="TopNav-links ml-auto">
            <div onClick={closeNav} className="TopNav-overlay"></div>
            <ul className="navbar-nav">
              <li className={`nav-item ${page === "home" ? "active" : ""}`}>
                <Link href="/">
                  <a onClick={closeNav} className="nav-link">
                    <i className="fas fa-home d-inline-block mr-3 d-lg-none"></i>
                    About
                  </a>
                </Link>
              </li>
              <li
                className={`nav-item ${page === "portfolio" ? "active" : ""}`}
              >
                <Link href="/portfolio">
                  <a onClick={closeNav} className="nav-link">
                    <i className="fas fa-code d-inline-block mr-3 d-lg-none"></i>
                    Portfolio
                  </a>
                </Link>
              </li>
              <li className={`nav-item ${page === "blog" ? "active" : ""}`}>
                <Link href="/blog">
                  <a onClick={closeNav} className="nav-link">
                    <i className="fas fa-book d-inline-block mr-3 d-lg-none"></i>
                    Blog
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="mailto:nickshelton1376@gmail.com"
                  className="btn btn-primary"
                >
                  <i className="fas fa-envelope d-inline-block mr-3 d-lg-none"></i>
                  Say Hello
                </a>
              </li>
            </ul>
            <div onClick={openNav} className="TopNav-hamburger">
              <i className="fas fa-bars d-inline-block mr-3 d-lg-none"></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
