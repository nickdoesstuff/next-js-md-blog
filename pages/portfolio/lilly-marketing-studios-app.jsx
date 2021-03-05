import { getPortfolioItemById } from "../../lib/portfolio";

import PortfolioItemHeader from "../../components/pages/Portfolio/PortfolioItemHeader";

const itemId = "ddb9da7e-5031-11eb-ae93-asf23423434";

const PortfolioPage = ({ portfolioItem }) => {
  const [galleryShowing, setGalleryShowing] = React.useState(false);

  const { title, subtitle, tech, roles } = portfolioItem;

  return (
    <section id="PortfolioArticle">
      <PortfolioItemHeader
        {...portfolioItem}
        video="/video/lilly_matrix_computer.mp4"
        smallText
      />

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>A Brief History of Lilly Work at Bottom-Line Performance</h4>
            <p>
              My previous employer, Bottom-Line Performance (BLP), used to do a
              lot of work with Eli Lilly but had gotten cut from their vendor
              roster before I joined the organization. Losing Lilly work was a
              big deal for a small company... when I was hired there was
              somewhere near 15-17 people in the tight-nit, family-oriented
              organization. After a year or so being there, the sting of losing
              Lilly, and the financial crisis, hit our company hard.
            </p>
            <img
              src="/images/pages/portfolio/lilly/hero.jpg"
              alt="hero image"
              className="img-thumbnail img-fluid float-right"
            />
            <p>
              The owners had to make cuts to keep the company going.
              Fortunately, in my brief tenure there, I had proven myself and
              kept my job.
            </p>
            <p>
              Over the years we slowly gained new clients, increased our
              foothold, and built our way back up to nearly 40 employees... but
              losing Lilly back in the day was a deep wound in BLP's story.
            </p>
            <p className="mb-5 pb-2">
              Nearly a decade later, we would get a shot at earning back the
              trust and business of this pharmaceutical giant.
            </p>
            <hr />
            <h4>The Project Big Picture</h4>
            <p>This project was a doozie. </p>
            <p>
              Part of the only reason we got the work, is because it was an
              insane timeline to produce a lot of training, and we wanted Lilly
              back so badly we said we would do it. Lilly was in the process of
              internalizing a lot of their marketing efforts – a complete
              re-hashing of their entire marketing workflow and how they worked
              with marketing vendors to improve consistency, efficacy, and the
              cost associated with marketing by brining most of the work in
              house.
            </p>
            <p>
              This meant new roles, changing roles, new processes for completing
              work, new best practices… a completely new way of doing work for
              someone in a marketing-adjacent role within the organization.
            </p>
            <p>
              BLP was slated to produce 2.5 hours of live instructor-led
              training, nearly 100 job-aid resource guides, 8 to 10 eLearning
              modules, and (this is where I come in) a portal website that would
              help everyone learn the new process and provide just-in-time
              resources on the job.
            </p>
            <h4>Crunched Timeline:</h4>
            <p>
              <img
                src="/images/pages/portfolio/lilly/timeilne.svg"
                alt="scheduling"
                className="img-thumbnail img-fluid float-right"
              />
              By the time the project was procured, kicked off, and enough work
              had started for the web portal portion of the project to begin, it
              was nearly October. We needed to launch the site, live to users at
              the beginning of December.
            </p>
            <p>
              We had about 9 weeks (including the Thanksgiving holiday) to get
              this done…launching early in the week after Thanksgiving.
            </p>
            <div className="row">
              <div className="col">
                <h6>An Aside - Other Things Going On</h6>
                <p>
                  As an aside, I was also in my first semester of my MBA, taking
                  what I would know now as the most time-consuming course thus
                  far in that journey.
                </p>
                <p>
                  As another aside, I had been approved to give my first-ever
                  conference presentation early in November at the ATD-CIC tech
                  summit.
                </p>
                <p>
                  This also, for portions, was not the only project I was
                  working on, and at this time I held the position of “Manager
                  of Multimedia Development”, which meant there were always
                  little projects and/or fires I was tending to.
                </p>
              </div>
            </div>

            <hr />
            <h4>Development Story:</h4>
            <p>
              The largest component we were building in the application would be
              an “interactive process map”. This would be the entire new
              marketing process, as a flow diagram, that would need to be
              interactive to provide resources to marketers.
            </p>
            <h6>A Handful of Challenges</h6>
            <p>
              <strong>Challenge #1</strong>- final processes (the flow) had not
              been finalized yet and would be changing throughout the project.
              How
            </p>
            <p>
              <strong>Challenge #2</strong> – based on the type of marketing
              tactics being produced, there were 8 different processes (flow
              diagrams) that needed to be interactive, based on the type of
              marketing.
            </p>
            <p>
              <strong>Challenge #3</strong> – We were unsure exactly how many,
              and what resources would need to be included, and linked to every
              individual process step.
            </p>
            <p>
              <strong>Challenge #4</strong> – Roles and titles were changing
              live and these roles/titles would need to be directly associated
              with every step in a process map, and every resource in the
              application.
            </p>
            <p>…</p>
            <p>
              These were not all of the challenges, there were way more – such
              as the client wanting us to work out of their offices 3 days a
              week – but those were some of the biggest technical hurdles to
              overcome.
            </p>
            <h6>My Solution</h6>

            <p>
              In the beginning of the project, before we were ready to ramp up
              development of the portal, I was very heavy with other work so
              testing “exact” solutions to the business/development problems was
              difficult to do.
            </p>
            <p>
              Luckily, I have experience with Adobe Illustrator and knew that
              you could export SVGs from the program.
            </p>
            <img
              src="/images/pages/portfolio/lilly/map.png"
              alt="process map"
              className="img-thumbnail img-fluid"
              style={{ width: "100%" }}
            />
            <p>
              <strong>
                I did a 30-minute test, creating a flow chart and messing with
                SVG export settings and pitched a process of:
              </strong>

              <ul>
                <li>
                  make pretty process charts in Adobe Illustrator (I’d provide
                  the needed structure).
                </li>
                <li>
                  I’ll figure out a way to make the SVG interactive & link to
                  content.
                </li>
              </ul>
            </p>
            <h6>Early on in Development</h6>
            <p>
              We had to work rapidly to get things approved to keep the project
              moving.
            </p>
            <p>
              First, we confirmed the site structure by creating high-fidelity
              screen layouts of the major components of the site. I presented
              these design’s live at Lilly and walked stakeholders through the
              flow of the application. I made what live tweaks I could to design
              and noted those that would require more effort after the meeting.
            </p>
            <p>
              At every design milestone, we would have the EyeTrack test our UX
              – this was Lilly Policy. This is UX testing where you sit in a
              room – kind of like MTV’s hit show “Punked” – and watch someone
              use your app, hear them talk about it, and get data about where
              their eyes went on your site. It was incredibly cool, but also,
              another time-consuming thing at each phase of the project.
            </p>
            <p>
              The High-Fidelity designs did really well in the UX testing, we
              got some ideas for tweaks, but I said that we’d implement the
              tweaks in the first functionally programmed version of the
              application, which would be one working map and resources page.
            </p>
            <p>
              Did I mention that the process maps were not finalized? I think I
              did.
            </p>
            <h6>Making an Interactive Map that Is Not Complete.</h6>
            <p>
              So… back to one of the big challenges. We likely won’t have final
              process maps until Mid-November…though they would be close in late
              October. When we were ready to start coding the 2nd week of
              October, we had 1 (of 8) process maps as a Visio document. It was
              ugly, we also needed to make it look as good as a complex process
              map could look.
            </p>
            <p>
              I told our Graphic Designer in charge of making the process maps
              to make a pretty version in Illustrator, of the current version of
              the finished map. Once I had that, I took the Illustrator file,
              and adjusted it including groupings and layering, to create a
              document that would export to SVG in a format that I could work
              with in code.
            </p>
            <p>
              I then created a how-to video and instructions on
              creating/updating the additional maps.
            </p>
            <p>
              Each one of the steps on the process, and the flow of the process
              would be continually changing as I was developing…so how do I
              remove the burden of large updates each time a process flow or
              step changed?
            </p>
            <h6>Where for Art Thou Data?</h6>

            <p className="mb-lg-5 pb-xl-5">
              <img
                src="/images/pages/portfolio/lilly/server.svg"
                alt="data"
                className="img-thumbnail img-fluid float-left"
              />
              Oh, another problem, with the quick nature of the project, we
              didn’t have time to get set up in Contentful, a content/backend as
              a service tool that would act as our data store, so I would need a
              temporary solution at launch. A temporary solution that our
              non-tech clients could help edit. A temporary solution that
              wouldn’t cause a lot of rework to reload the content into the
              application during edits (of which there would be hundreds,
              constantly, frequently, daily).
            </p>
            <h6>One Algorithm to Rule Them All</h6>
            <p>
              With this problem at hand, I knew that the final process map had
              to be my “source of truth”. That specific resources would have to
              be loaded for each step of the algorithm, that specific text and
              other materials would have to be loaded for each given step. My
              solution was to write an algorithm that would run at startup of
              the application, which would parse the SVG process maps, and
              “automatically” link each of the items within the SVG to the
              content it was supposed to display.
            </p>
            <h6>Excel as a Database</h6>
            <p>
              If you are a developer or have a dev background, you probably
              threw up in your mouth a little bit at that headline. But, it’s to
              get content into a format that anyone could edit, including the
              client, I created an Excel document that mimicked a relational
              database that the app would use.
            </p>
            <p>
              With this in place, both internal writers and stakeholders at
              Lilly could change our content in the Excel document (a commonly
              understood format) and save a new version.
            </p>
            <p>
              When a process map changed, the Illustrator file changed, and the
              Excel “database” was updated to reflect those changes. New steps
              were added (though like a database, no in any particular order),
              text and resource linkages were changed, etc.
            </p>
            <p>
              With my “killer” algorithm I could export a new SVG from
              illustrator, update the Excel document, put them into the app, and
              the code would take over and make everything work. This was
              initially done using text-matching for process step names, but
              eventually was changed to utilize content IDs.
            </p>
            <p>
              This allowed for daily update of the app via Illustrator & Excel,
              that didn’t require much in terms of reprogramming anything once
              the algorithm was created.
            </p>
            <h6>Constantly Iterating</h6>
            <p>
              We delivered the first version of the application in this manner,
              to rave reviews. Again, we did EyeTrack testing which confirmed we
              were on the right path.
            </p>
            <p>
              The process map Illustrator files and Excel document continually
              changed, but the app was set up to leverage this for minimal
              rework. We added the 7 additional process maps leveraging the same
              structure, and it worked really well. Because of working in Excel,
              we could pivot content very nimbly. By mid-November, the app was
              pretty close to it’s final state.
            </p>
            <h6>Project Management</h6>
            <p>
              Because the overall project manager didn’t have any experience
              with software, I took the project management duties of the app.
              This meant setting timelines, deadlines, and orchestrating QA
              testing both internally and with the client.
            </p>
            <p>
              I created a robust testing plan that would allow a team of 4
              testers on our end (1 person to test 2 maps each) to confirm
              proper function and content of over 1000 pieces of process-related
              content and linkage.
            </p>
            <p>
              I was both a hoodie wearing, caffeine-drinking developer behind
              the scenes, and a polished presenter and client partner when the
              need arose.
            </p>
            <h6>The Final Push</h6>
            <p>
              In mid-November we got the final onslaught of content changes. A
              lot of content changes, nearly 1000 of them. Some of these
              included things like “sub processes” within larger process maps (a
              new feature) and creating “how to use the tool” training videos. I
              would develop any new features, enhance existing ones, and
              delegate any content and/or video requirements to other members of
              the team.
            </p>
            <p>
              That said, there was a lot of work in a short period of time to
              finalize, and get the application ready to be deployed to
              production within Lilly’s Lucid framework (an express-based, node
              backend).
            </p>
            <p>
              I never told anyone this, but I skipped Thanksgiving that year and
              was pulling 12-14 hour days during the 4-day Thanksgiving weekend
              to make this happen…but I made it happen.
            </p>
            <h4>The Result</h4>
            <p>
              In the end, we made this work, we launched
              Lillymarketingstudios.com on time and on budget.
            </p>
            <p>
              Two of the most fulfilling moments of my career came from this
              project came from this project.
            </p>
            <p>
              The first was one-day at Lilly, someone said “This is the guy who
              made Lilly Marketing Studios, wow, it’s incredible, thank you so
              much, we love it.” Just random verification that the software I
              made had a positive impact, worth my weight in gold.
            </p>
            <p>
              The second, completely unexpected, was that this whole project was
              presented as a case study at ExLearn, a training conference BLP
              put on that year. My manager was presenting, and someone in the
              crowed asked “how did you develop such a site on such a restricted
              timeline.” My boss said that it was one developer, me, and a
              ballroom of 100+ people erupted in applause. Not something I am
              looking for, not something I expected, I was probably as red as a
              granny smith, but it was the first time it really hit home as a
              big accomplishment.
            </p>
            <h4>Carry Over</h4>
            <p>
              After this project, BLP got millions of dollars of future work
              with Lilly. Once, my boss told me that the reason we got all this
              additional work, was because of what I was able to accomplish with
              the app that I developed. My 2 months of pedal to the medal made a
              difference in our small business, and that means a lot to me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export async function getStaticProps(context) {
  const portfolioItem = getPortfolioItemById(itemId);
  return {
    props: {
      portfolioItem,
    },
  };
}

export default PortfolioPage;
