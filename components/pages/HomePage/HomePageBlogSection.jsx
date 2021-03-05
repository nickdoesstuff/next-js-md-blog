import Link from "next/link";

const HomePageBlogSection = () => {
  return (
    <section id="HomePage-blog" className="container-fluid pt-5 mt-5 mb-5 pb-5">
      <div className="container mb-5 mt-5 pb-5">
        <div className="row text-center">
          <div className="col-12 offset-0 col-md-8 offset-md-2 px-4">
            <h3>
              I'm Gathering My Thoughts <br /> <small>(Blog Coming Soon)</small>
            </h3>
            <p className="py-3">
              I’ve created/written a lot over the years, I’m pruning the tree,
              and will add old and new posts soon. Check back soon!
            </p>
            <Link href="/blog">
              <a className="btn btn-outline-primary mb-4">Read Blog</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePageBlogSection;
