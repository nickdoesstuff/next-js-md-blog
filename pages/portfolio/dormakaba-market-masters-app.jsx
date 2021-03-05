import { getPortfolioItemById } from "../../lib/portfolio";

import PortfolioItemHeader from "../../components/pages/Portfolio/PortfolioItemHeader";

const itemId = "ddb9da7e-5031-11eb-ae93-0242ac130002";

const PortfolioPage = ({ portfolioItem }) => {
  const [galleryShowing, setGalleryShowing] = React.useState(false);

  const { title, subtitle, tech, roles } = portfolioItem;

  return (
    <section id="PortfolioArticle">
      <PortfolioItemHeader {...portfolioItem} video="/video/dorma_phone.mp4" />

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>Development Story:</h4>
            <p>
              dormakaba needed to get nomenclature training into the hands of
              staff quickly. To make this happen, our development team took a
              very agile approach to creating, iterating on, and delivering this
              gamified proof-of-concept. The bulk of the project, from kickoff
              to delivery of a final working application took place in just over
              8 weeks.
            </p>
            <p>
              This meant that every client-facing interaction was pivotal, we
              didn't have time for fluffy, pie in the sky ideas... rather we
              would need to fully take advantage of every meeting (internally
              and client facing) to leave with next action steps and buy-in from
              stakeholders on direction and functionality. Additionally, the
              client would require time to gather the content required for the
              application, so the development timeline needed to be scaffolded
              in a way that allowed for substantial progress, while information
              was being gathered and organized in parallel.
            </p>
            <img
              src="/images/pages/portfolio/dormakaba/schedule.png"
              alt="scheduling"
              className="img-thumbnail img-fluid float-right"
            />
            <p>
              Based on these requirements, I helped the team put together a
              timeline that was feasible for both teams. At a very high level,
              our plan looked something like this:
            </p>
            <ul>
              <li>
                <strong>Pre-Planning: </strong>Getting the Most out of Kickoff
              </li>
              <li>
                <strong>Day 1: </strong>Project Kickoff and Design Meeting
              </li>
              <li>
                <strong>Week 1: </strong>Delivery of high-fidelity functional
                prototypes
              </li>
              <li>
                <strong>Week 3: </strong>Delivery of working game shell and 1st
                round of game 1
              </li>
              <li>
                <strong>Week 5: </strong>Delivery of 1st round of all games, and
                all rounds/modes of game 1
              </li>
              <li>
                <strong>Week 7: </strong>Delivery of fully functional training
                app, including analytics and data persistence
              </li>
              <li>
                <strong>Week 8: </strong>Delivery of final product for
                implementation into production
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <p>
              The budget for the project was tight constricted, especially for
              the UI/UX/Software development. At one point an internal
              stakeholder realized the project was priced at 16 hours per game,
              and when reviewing her records, realised they normally charged 16
              "points" per game for a game like this. In the infrastructure with
              my partner organization, 16 points equates to 16 days or 128 hours
              per game.&nbsp;
              <strong>
                <em>
                  I only had approximately 140 hours to complete the entire
                  project
                </em>
              </strong>
              , from being the technical lead, to UI/UX design, to making final
              games and adding all the polish. The hours I had for the entire
              project barely exceeded the hours normally applied to creating a
              single, stand-alone game.
            </p>
            <p>
              Additionally, I was a 3rd party contractor to the organization
              building the project for dormakaba. This meant simultaneously
              pleasing the end client, as well as my direct client for which I
              was doing the contract work. Because of this, I had to take an
              enhanced leadership role during development to deliver the best
              software possible on budget. The project was underscoped, to win
              the work, for hope of additional future work. Lack of execution at
              any point along the timeline by any team member would make me more
              money (big adjustments would require more time) but make my direct
              client less profitable. I wanted dormakaba to be delighted with
              the result, and my direct client to be delighted with the process,
              which largely meant coming in on budget and making dormakaba
              happy.
            </p>
            <p>
              I don't want to toot my own horn, but I have an ability to "see" a
              project like lego pieces...I "saw" the games, the components, the
              requirements "snap" together in my mind, and saw what it would
              take to get this done for the number of hours I had. This meant
              saying "we can't do this" here, and/or pushing back on internal
              feedback I didn't agree with before the client saw it. I had to
              put my foot in the ground regarding my "sphere of expertise" on
              the project, to keep the budget.
            </p>
            <p>
              This meant transparency in development and intense focus on
              features and development of stories that added maximal value to
              the product. In a lot of ways, I liked the pressure required to
              stay on point with all ends of the project. Unfortunately, I had
              to push back on scope many times, even with the understanding the
              project was underscoped.
            </p>
            <p>So, 140 hours and a lot to get done, how did it go?</p>
            <hr />
            <h4>Pre-Planning: Getting the Most out of Kickoff</h4>
            <img
              src="/images/pages/portfolio/dormakaba/dormakaba_6.jpg"
              alt="scheduling"
              className="img-thumbnail img-fluid float-left"
            />
            <p>
              We started work for the project a few days before the kickoff and
              design meeting. We met via Microsoft Teams to determine who would
              take what sections of the design meeting and divvied up work to
              create the design meeting presentation deck. It was here that I
              set the stage for the budget being tight, and that we could not
              offer everything under the sun in terms of features. Based on the
              project proposal that won the work, we decided at a high-level on
              the features we could offer within scope. We also play tested
              several learning games and found some that we liked to fit the
              dormakaba content.
            </p>
            <p>
              We went our separate ways and worked on our deck components. My
              counterpart working on things like learning theory and user
              persona’s, and me working on slides to get buy-in for UI, UX, and
              the three games we would be building for the project. We iterated
              a bit each day leading up to the design meeting and were set to go
              over the materials the day before the actual meeting.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
            <h4>Then I got into a car crash. </h4>
            <p>
              The day before the Design Meeting, on the way to do a practice
              run, I had to swerve my car off a country road and into a ditch to
              avoid hitting another car head on. I called my client and told
              them what happened and that we would have to delay our internal
              kickoff. We decided to go over the final deck remotely, later that
              day, once I got my car towed, licked my wounds, and made it home.
              I was rattled but would not let my life mishap get in the way of a
              successful project kickoff.
            </p>
            <p>
              I have to thank my partner here, they were very kind and
              understanding, and were ok to not perform our dry run.
            </p>
            <hr />
            <h4>Day 1: Project Kickoff and Design Meeting</h4>

            <img
              src="/images/pages/portfolio/dormakaba/dormakaba_3.jpg"
              alt="scheduling"
              className="img-thumbnail img-fluid float-left"
            />
            <p>
              During the design meeting, we were in the room with several
              dormakaba stakeholders, salespeople, and training project leaders,
              with several more joining via Microsoft Teams. Most of the meeting
              was devoted to project goals and learning theory, such as the
              development of learner persona’s and a learning journey for the
              platform.{" "}
            </p>
            <p>
              My time to shine came to talking about technology, user stories,
              and reviewing games that the participants enjoyed, that they could
              envision working for their content. I came into the meeting with
              the feeling that I needed to get buy in, at least at a high level,
              on the direction and expectations around the 3 mini games we were
              going to build. Without that buy-in, we would be sending designs
              over the fence hand crossing our fingers that they landed with
              stakeholders.
            </p>
            <p>
              During a break before my section, my direct client asked how I was
              going to proceed. I said I was going to run them through various
              games to get buy in on what mini games we were going to create. At
              that moment, I was shocked when asked to go off script, and just
              ask that people talk about what games and user experiences they
              liked, and to ask them to play around with a few apps on their
              phones we recommended, followed by discussion on what they liked
              and did not like from the selections. I stressed the importance of
              getting buy-in on game types but agreed to the pivot.
            </p>
            <p>
              Let us just say that with some users remotely joining the meeting,
              the participants struggled when we asked them to talk about games
              and features, they liked, and we spent some time spinning our
              wheels and were getting no answers. After my stakeholder and I
              made this realization, we went back to my pre-prepared slides,
              which walked through the user experience of games we’d
              hand-selected as being matches to the dormakaba content, and the
              ideas and synergy was back on track. Going through various
              learning mini games as I had planned, sparked ideas amongst
              attendees, and we we’re quickly able to come to a consensus around
              the three types of games we would develop for the program.{" "}
            </p>
            <p>
              This was huge, leaving the meeting without this consensus would
              have blown the budget before we even got started.
            </p>
            <p>
              I concluded the meeting talking about how the project would be
              developed technical with tech and marketing stakeholders of the
              company, to gain buy-in on those aspects of the project, and to
              provide them a technical timeline for implementation.
            </p>
            <p>
              We had buy-in on all key development dates and were off to the
              races.
            </p>

            <hr />

            <h4>Week 1: Delivery of high-fidelity functional prototypes</h4>

            <img
              src="/images/pages/portfolio/dormakaba/dormakaba_5.jpg"
              alt="scheduling"
              className="img-thumbnail img-fluid float-right"
            />
            <p>
              To get to get the most return on investment, the first delivery
              was to be high-fidelity prototypes. I knew, that in order to
              reduce the burden of iterating on features in code, the client
              needed to see and feel the entire experience of the application
              before much code was written.
            </p>
            <p>
              I took dormakaba branding, created overall application branding,
              as well as branding for each of the mini games so that each one
              would be instantly recognizable to players. I then developed the
              “flow” of each game and all the main screens of the application
              and each of the games using Adobe XD. With this, I could easily
              add basic interactivity and allow users to “feel” how the
              end-product would work.
            </p>
            <p>
              The learning expert from my direct client felt that we should use
              a flatter design, eliminating some of the colors, but I pushed
              that would genericize the experience and that we should get client
              feedback prior to making this change, and she accepted. The
              project manager of my direct client was thrilled with the
              prototypes, said he’d never seen something so robust delivered so
              early, loved the way we were working agilely, and claimed that he
              was going to take this process to his future projects.
            </p>
            <p>
              <strong>
                <em>That felt good.</em>
              </strong>
            </p>
            <p>
              After a day to design the application and a little internal
              interaction, we were ready to show our progress to dormakaba.
              Great news, because they had a clear picture of what they would be
              seeing and what games we would be building from the first meeting,
              there were only minor tweaks to the prototypes we developed. We
              didn’t need to tweak and resend prototypes, but rather could take
              and implement prototype feedback directly into development.
            </p>

            <h4>
              Week 3: Delivery of working game shell and 1st round of game 1
            </h4>
            <img
              src="/images/pages/portfolio/dormakaba/dormakaba_4.jpg"
              alt="scheduling"
              className="img-thumbnail img-fluid float-left"
            />
            <p>
              From there, the project was straight forward, take the approved
              designs and build them using React.
            </p>
            <p>
              The first development delivery was the largest and hardest to
              achieve. This is because I needed to essentially build the entire
              structure of the application and games and get everything wired up
              to deliver the experience of the first game. With an internal
              review, this meant knocking out the app shell and large parts of
              game 1 in a week, and then iterating the second week for client
              delivery.{" "}
            </p>
            <p>
              Again, because of the development timeline we shared early, the
              client knew exactly what they were getting at each stage, and we
              had the prototypes to refer to whenever we needed to remind them
              of components or rejog their memory.
            </p>
            <h4>
              Week 5: Delivery of 1st round of all games, and all rounds/modes
              of game 1
            </h4>
            <img
              src="/images/pages/portfolio/dormakaba/dormakaba_1.jpg"
              alt="scheduling"
              className="img-thumbnail img-fluid float-right"
            />
            <p>
              The second delivery included perfecting the front-end components
              of the application, implementing edits received from the client
              for game 1, implementing a “Master Mode” for game one that would
              be re-used for all future games, and building out the first round
              of the other two mini-games. Again, because I was a contractor,
              the first week of the development cycle was often the heaviest,
              implementing all of the design and features, only to have a more
              lax second week waiting on review and implementing internal edits
              and having meetings to discuss ideas and opinions.
            </p>
            <p>
              Again, due to the way we were scaffolding deliveries, the client
              was pleased with the progress and what we delivered in the second
              development delivery round.
            </p>
            <h4>
              Week 7: Delivery of fully functional training app, including
              analytics and data persistence
            </h4>
            <p>
              The last delivery included making edits from the previous
              delivery, as well as implementing “Master Mode” into all games and
              adding functionality around overall game progression and
              implementing a “win” state.{" "}
            </p>
            <p>
              Additionally, Google Analytics were added so that dormakaba could
              investigate application utilization and game play statistics.
              Google Sheets was used as a simple back-end implementation that
              allowed for simple game persistence, as well as storage of user
              data for later reporting.
            </p>
            <h4>
              Week 8: Delivery of final product for implementation into
              production
            </h4>

            <img
              src="/images/pages/portfolio/dormakaba/dormakaba_2.jpg"
              alt="scheduling"
              className="img-thumbnail img-fluid float-left"
            />
            <p>
              The last delivery was a packaged application with all edits
              implemented. Additionally, I set up dormakaba staff with Analytics
              and Sheets access and gave them a basic overview on how to use
              these tools to gain insights into their training.
            </p>
            <p>
              In the end, we had delivered a highly customized experience
              through a very agile and iterative process. The customer was
              thrilled, and due to my focus on delivering the features of most
              value, we were able to deliver the software on budget.
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
