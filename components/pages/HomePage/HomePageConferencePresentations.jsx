import Link from "next/link";

import LinkCard from "../../../components/LinkCard";

const presentations = [
  {
    _id: "ddb9da7e-5031-11eb-ae93-0242ac130002",
    title: "360° of Separation",
    description:
      "Association of Talent Development International Conference - A presenation on how to use 360° video and web technolgies (including authoring tools) to produce proof-of-concept interactive video.",
    bgImage: "/images/pages/presentations/360.jpg",
    image: "/images/pages/presentations/360_logo.png",
    color: "#542f9e",
    href: "portfolio/presentations/360-degrees-of-separation",
  },

  {
    _id: "ddb9da7e-5031-11eb-ae93-asf23423434",
    title: "Promise vs Hype",
    description:
      "Association of Talent Development International Conference - A presenation and rubric for evaluating technology prior to large-scale organizational adoption.",
    bgImage: "/images/pages/presentations/hype.jpg",
    image: "/images/pages/presentations/tech_logo.png",
    color: "#836409",
    href: "portfolio/presentations/promise-vs-hype",
    tech: ["react", "sass", "xd", "ps", "ga", "sheets"],
    roles: ["tech", "software", "ux/ui", "graphics"],
    tags: ["home"],
  },
  {
    _id: "ddb9da7e-5031-11eb-ae93-2342397asdf",
    title: "Interactive Video in Articulate Storyline",
    description:
      "Association of Talent Development Central Indiana Chapter Tech Summit Presenation on more effective ways to put together interactive video.",
    bgImage: "/images/pages/presentations/storyline.jpg",
    image: "/images/pages/presentations/storyline_logo.png",
    color: "#45179f",
    href:
      "portfolio/presentations/high-fidelity-low-cost-interactive-video-in-storyline",
    tech: ["react", "sass", "xd", "ps", "ga", "sheets"],
    roles: ["tech", "software", "ux/ui", "graphics"],
    tags: ["home"],
  },
];

const HomePageConferencePresentations = () => {
  return (
    <section>
      <article className="container-fluid bg-info text-center text-white pt-5 pb-3">
        <div className="container py-3">
          <h3>Conference Presentations</h3>
          <div className="col-12 offset-0 col-md-8 offset-md-2 mt-3 px-4">
            <p>
              I'm a bit of a nerd. I enjoy sharing cool new ideas, techniques,
              and technologies just as much as I love to learn. The best thing
              is seeing someone get excited by a new idea. My wife tells me I
              should be a teacher.
            </p>
          </div>
        </div>
      </article>

      <article
        id="HomePage-presentations"
        className="container-fluid bg-info pb-2 mb-5"
      >
        <div className="container">
          <div className="row mb-5">
            {/* map over hope page portfolioItems */}
            {presentations.map((item) => (
              <LinkCard key={item._id} card={item} />
            ))}
          </div>
        </div>
      </article>
    </section>
  );
};

export default HomePageConferencePresentations;
