import { getPortfolioItemById } from "../../lib/portfolio";

import PortfolioItemHeader from "../../components/pages/Portfolio/PortfolioItemHeader";

const itemId = "ddb9da7e-5031-11eb-ae93-2342397asdf";

const PortfolioPage = ({ portfolioItem }) => {
  const [galleryShowing, setGalleryShowing] = React.useState(false);

  const { title, subtitle, tech, roles } = portfolioItem;

  return (
    <section id="PortfolioArticle">
      <PortfolioItemHeader
        {...portfolioItem}
        video="/video/roche_laptop.mp4"
        smallText
      />

      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <h4>cobas 6000 Workflow App</h4>
            <p>
              <video
                className="img-thumbnail float-left"
                src="/video/roche_workflow.mp4"
                autoPlay
                loop
                muted
                lazy
                controls
              ></video>
              This app was developed utilizing primarily with jQuery and built
              to be loaded into Roche’s enterprise learning management system.
            </p>
            <p>
              Labs who purchased a cobas 6000 series analyzer would use it in
              combination with other immunoassay modules to run blood tests
              throughout the day. There were 8 common configurations a lab would
              use that would leverage the cobas 6000 series analyzer and so a
              “workflow” of steps would accompany each.
            </p>
            <p>
              The app would provide the “best workflow” as a starting
              configuration based on the labs setup, and the lab could customize
              the workflow based on their needs. Based on customization, the
              workflow app would provide efficiency metrics about their
              workflow, and offer feedback where less optimal workflow orders
              were created.
            </p>
            <p className="pt-3">
              <strong>Additional Features include:</strong>
              <ul>
                <li>The ability to sort any workflow step.</li>
                <li>
                  Each workflow step had efficiency impact on all other steps.
                </li>
                <li>
                  Some workflow steps in the wrong order would break a workflow
                  and cause errors, when this would happen, the app would tell
                  what/why this process would break, and course correct.
                </li>
                <li>
                  An undo queue that allowed labs to introduce sub-optimal
                  workflows, see the efficiency impact, and then undo the
                  changes back to an optimal workflow.
                </li>
                <li>
                  The ability to add custom tasks their lab might have (shift
                  changes, breaks, other manual steps).
                </li>
                <li>
                  The ability to add lab specific notes to each workflow step.
                </li>
                <li>
                  The ability to rename and add metadata to their workflow.
                </li>
                <li>
                  The ability to have a pretty print-out of the fully customized
                  workflow.
                </li>
                <li>
                  The ability to sync custom workflows to Roche’s Learning
                  Management System.
                </li>
                <li>And More</li>
              </ul>
            </p>
            <hr />
            <h4>cobas 6000 Flashcard App</h4>
            <p>
              <video
                className="img-thumbnail float-right narrow"
                src="/video/roche_flashcards_phone.mp4"
                autoPlay
                loop
                muted
                lazy
                controls
              ></video>
              This app was developed utilizing primarily with jQuery and built
              to be loaded into Roche’s enterprise learning management system.
              The application also leveraged LESS CSS preprocessing to allow for
              quick rebranding of other versions of the same application.
              Overall, we developed nearly 20 versions of this application for
              various Roche projects.
            </p>
            <p>
              There would be a list of training topics the user would need to
              learn about, with a subset of content cards for each. A user would
              see the front of the card, identify what was on it, flip the card,
              and then self-rate their confidence with that item.
            </p>
            <p>
              An algorithm was writing so after an initial pass through each
              “deck” of cards, the app would prioritize cards into future
              shuffles that the user was less confidant in their knowledge.
              Because of this, learners would get harder stuff more often, get
              better at it, and eventually master the content of each topic.
            </p>
            <p>
              We produced standalone web deliveries of this, as well as versions
              that interfaced with Roche’s enterprise learning management
              system.
            </p>
            <p>
              The initial version of this was built in the early days of
              responsive design and required proper function in IE8, which is
              why some of the animation isn’t as cool/snappy as I’d like it to
              be.
            </p>
            <p>
              The first version of this app was a key component of the cobas
              8000 curriculum, which won BLP many additional curriculums of work
              for cobas series training, which increased our footprint at Roche,
              which ultimately led to millions in business for BLP with Roche.
            </p>
            <hr />

            <h4>cobas 6000 Onsite Training Facilitator's Guide</h4>
            <p>
              <video
                className="img-thumbnail float-left"
                src="/video/roche_onsite.mp4"
                autoPlay
                loop
                muted
                lazy
                controls
              ></video>
              This app was developed utilizing primarily with jQuery and jQuery
              mobile and built to be loaded into Roche’s enterprise learning
              management system. The application also leveraged LESS CSS
              preprocessing to allow for quick rebranding of other versions of
              the same application. Overall, we developed nearly 20 versions of
              this application for various Roche projects.
            </p>

            <p>
              The application would be loaded onto the iPads of field
              application specialists who would go to labs witch cobas hardware,
              and who would use the application to train lab operators and other
              various roles live on the analyzers.
            </p>
            <p>
              Training could be customized based on role, lab setup, and more. A
              trainer could then further customize the training to
              include/exclude specific topics and would be presented with a
              linear walkthrough of their day of training when in the lab. The
              result was an application that required no up-front prep for field
              application specialists or trainers and allowed them to show up in
              a lab and start training sessions with ease.
            </p>
            <p>
              The first version of this app was a key component of the cobas
              8000 curriculum, which won BLP many additional curriculums of work
              for cobas series training, which increased our footprint at Roche,
              which ultimately led to millions in business for BLP with Roche.
            </p>
            <hr />
            <h4>Roche Regulatory Affairs eMag</h4>
            <p>
              <video
                className="img-thumbnail float-right"
                src="/video/roche_emag.mp4"
                autoPlay
                loop
                muted
                lazy
                controls
              ></video>
              This app was developed utilizing primarily Backbone and jQuery and
              built to serve as an information portal for various components of
              Regulatory training at Roche. The application also leveraged LESS
              CSS preprocessing to allow for quick rebranding and theming of the
              “emag”. Overall, we developed nearly 10 versions of this
              application for various Roche projects as informational
              repositories and/or training guides.
            </p>
            <p>
              This sadly, was the first (I didn’t save off the code for all
              versions) and probably the least attractive of all of them I
              created. LESS variables would allow rebranding of the entire
              application in seconds, allowing us to focus on custom content
              creation for each version of the application. This allowed maximum
              profit opportunities and/or for us to woo clients with a nice
              application at very low cost.
            </p>
            <p>
              We created eMag versions for multiple Roche sister companies, with
              various color-schemes, themes, and custom article features,
              typically for only a few days of programming burden, which often
              fell to custom article layout and the occasional custom
              interactive activity.
            </p>
            <hr />
            <h4>AccuChek Connect Android Phone Game</h4>
            <p>
              <video
                className="img-thumbnail float-left narrow"
                src="/video/roche_accucheck_phone.mp4"
                autoPlay
                loop
                muted
                lazy
                controls
              ></video>
              This app was built using jQuery and LESS and I hesitate to even
              show it today. It was built in the days of infancy of mobile web,
              responsive design, and before any of the big front-end frameworks
              had much uptake and even before a lot of them were invented.
            </p>
            <p>
              This thing needed to work on IE8, mobile, and especially for older
              generation Android devices.
            </p>
            <p>
              The main thing that I like about it is that I used the Apache
              Cordova product to package the web app as a native Android
              application. I worked with a Tech lead at Roche to get the .apk
              into their test environment and loaded onto their employee’s
              devices.
            </p>
            <p>
              This was before the days of BYOD, where each employee had a
              similar android device that was required by the company.
            </p>
            <p>
              It’s a linear card game (with elements of shuffling and
              randomization) that allows multiple people to sit around at a
              table and play through the game together. I would have preferred
              using something like socket.io to allow for real-time
              collaboration and gameplay, but the budget was tight and such
              systems were not as well documented then.
            </p>
            <p>It has given me future product ideas though.</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            <h4>Other Sites &amp; Apps</h4>
            <p>
              I’ve built a lot of other websites and apps for Roche. A couple
              include:
            </p>
            <p>
              <strong>The BLP LMS:</strong>I built a simple backend that allowed
              tracking of anything that an LMS couldn’t. In reality, it was a
              simple backed that would provide an API key and return some JSON
              data and a JavaScript file. This JavaScirpt file would listen to
              specific variables in apps and courses we developed and whenever a
              user’s value updated, it would sync that data in a database. There
              is a simple backend that admins can sign into and run reports, as
              well as a cron job that sends weekly reports to stakeholders on
              new user and data. Versions of this tool were implemented to track
              large swaths of data from various Roche courses, as well as for
              their sister company, Genentech. The result is a simple solution
              to data tracking, that could be reused. We implemented this tool
              nearly 6 years ago in a handful of projects, which equates into a
              easy 10-20k a year in “set it and forget it money” for clients as
              they update annually to keep the data tracking alive.
            </p>
            <p>
              <strong>Roche Molecular Systems (RMS) Competitor Form:</strong>
              As a result of our success with the cobas 8000 curriculum (the
              course I developed, the flashcard app, the onsite training guide,
              and more), we got a lot of product launch work with RMS. Nearly
              every product launch would include a small AngularJS (yeah,
              Angular JS means version 1) app that I developed which would allow
              a learner to fill out specific information about their sales
              environment and competitors, and use that information to generate
              a printout that they would bring with them as their “entrance
              ticket” and training tool at live training events.
            </p>
            <p>There have been more… but this is too long already 😊.</p>
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
