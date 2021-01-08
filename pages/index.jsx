import Head from "next/head";

import HomePageHero from "../components/pages/HomePage/HomePageHero";
import HomePageTopClouds from "../components/pages/HomePage/HomePageTopClouds";
import HomePageNickIllustration from "../components/pages/HomePage/HomePageNickIllustration";
import HomePageAboutNick from "../components/pages/HomePage/HomePageAboutNick";
import HomePageSkills from "../components/pages/HomePage/HomePageSills";
import HomePagePortfolio from "../components/pages/HomePage/HomePagePortfolio";
import HomePageConferencePresentations from "../components/pages/HomePage/HomePageConferencePresentations";
import HomePageBlogSection from "../components/pages/HomePage/HomePageBlogSection";
import HomePageProjectCTA from "../components/pages/HomePage/HomePageProjectCTA";

import { getPortfolioItems } from "../lib/portfolio";

export default function Home({ portfolioItems }) {
  return (
    <>
      <Head>
        <title>Nick Does Stuff</title>
        <meta
          name="description"
          content="Hi, I'm Nick Shelton - I design and code experiences that users ❤. I'm currently looking for a long term relationship with a great company. Until then, I'm happy to mingle if you have an exciting or challenging project and need a nerd on your team."
        />
      </Head>
      <div id="HomePage">
        <div id="TopClouds"></div>
        {/* Top Tag Line */}
        <HomePageHero />

        {/* Clouds Behind Hero */}
        <HomePageTopClouds />

        {/* Cartoon Character */}
        <HomePageNickIllustration />

        {/* About info below Cartoon - includes extra bottom spacer */}
        <HomePageAboutNick />

        {/* 3 column skills table */}
        <HomePageSkills />

        {/* portfolio & cards */}
        <HomePagePortfolio portfolioItems={portfolioItems} />

        {/* Presentation, spacer div + cards */}
        <HomePageConferencePresentations />

        {/* Blog Section */}
        <HomePageBlogSection />

        {/* Project call to action */}
        <HomePageProjectCTA />
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const portfolioItems = getPortfolioItems("home");
  return {
    props: {
      portfolioItems,
    },
  };
}
