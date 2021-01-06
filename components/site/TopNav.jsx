import Link from "next/link";
import GlassesLogo from "../logos/GlassesLogo";

const TopNav = () => {
  return (
    <nav className="TopNav navbar bg-white navbar-inverse navbar-expand fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          <GlassesLogo />
        </a>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link href="/">
                <a className="nav-link">About</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/portfolio">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className="nav-item">
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
