import { useRouter } from "next/router";

function ActiveLink({ children, href }) {
  const router = useRouter();
  const classNames =
    router.pathname === href ? "nav-item nav-link active" : "nav-item nav-link";

  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <a href={href} onClick={handleClick} className={classNames}>
      {children}
    </a>
  );
}

export default ActiveLink;
