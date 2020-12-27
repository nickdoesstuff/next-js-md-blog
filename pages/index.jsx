import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm <strong>Nick</strong>! I'm a passionate developer with a keen
          eye for design. I love making engaging user experiences.
        </p>
      </section>
    </Layout>
  );
}
