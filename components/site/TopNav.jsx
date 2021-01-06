import Link from "next/link";
import GlassesLogo from "../logos/GlassesLogo";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const TopNav = () => {
  const { pathname } = useRouter();

  const [page, setPage] = useState("home");

  useEffect(() => {
    if (pathname.includes("/blog")) {
      setPage("blog");
    } else if (pathname.includes("/portfolio")) {
      setPage("portfolio");
    } else {
      setPage("home");
    }
  }, [pathname]);

  return (
    <nav className="TopNav navbar navbar-inverse navbar-expand fixed-top shadow-sm">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">
            <GlassesLogo />
          </a>
        </Link>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className={`nav-item ${page === "home" ? "active" : ""}`}>
              <Link href="/">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className={`nav-item ${page === "portfolio" ? "active" : ""}`}>
              <Link href="/portfolio">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className={`nav-item ${page === "blog" ? "active" : ""}`}>
              <Link href="/blog">
                <a className="nav-link">Blog</a>
              </Link>
            </li>
            <button className="btn d-none d-md-block btn-primary ml-4">
              Say Hello
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default TopNav;
