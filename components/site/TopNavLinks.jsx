import Link from "next/link";
import SiteFooterCraftedBy from "./SiteFooterCraftedBy";

const TopNavLinks = ({ className, page, closeNav, scrollToTop }) => {
  return (
    <div onClick={closeNav} className={`TopNav-links ml-auto ${className}`}>
      <ul className="navbar-nav">
        <li
          onClick={() => scrollToTop("/")}
          className={`nav-item ${page === "/" ? "active" : ""}`}
        >
          <Link href="/">
            <a className="nav-link">
              <i className="fas fa-home d-inline-block mr-3 d-md-none"></i>
              About
            </a>
          </Link>
        </li>
        <li
          onClick={() => scrollToTop("/portfolio")}
          className={`nav-item ${page.includes("/portfolio") ? "active" : ""}`}
        >
          <Link href="/portfolio">
            <a className="nav-link">
              <i className="fas fa-code d-inline-block mr-3 d-md-none"></i>
              Portfolio
            </a>
          </Link>
        </li>
        <li
          onClick={() => scrollToTop("/blog")}
          className={`nav-item ${page.includes("/blog") ? "active" : ""}`}
        >
          <Link href="/blog">
            <a className="nav-link">
              <i className="fas fa-book d-inline-block mr-3 d-md-none"></i>
              Blog
            </a>
          </Link>
        </li>
        <li className="nav-item">
          <a
            href="mailto:nickshelton1376@gmail.com"
            className="btn btn-primary"
          >
            <i className="fas fa-envelope d-inline-block mr-3 d-md-none"></i>
            Say Hello
          </a>
        </li>
        {className.includes("mobile") && (
          <li className="nav-item mt-auto crafted-by">
            <SiteFooterCraftedBy />
          </li>
        )}
      </ul>
    </div>
  );
};

export default TopNavLinks;
