import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/projects.css";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "projects");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Projects | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="projects" />
        <div className="content-wrapper">
          <div className="projects-logo-container">
            <div className="projects-logo">
              <Logo width={46} />
            </div>
          </div>
          <div className="projects-container">
            <div className="title projects-title">
              Navigating the realms of code, I've concocted a unique blend of
              digital potions—a whimsical effort to infuse my imprint in the
              vast universe of software engineering, transcending my roots in
              pharmacy.
            </div>

            <div className="subtitle projects-subtitle">
              Transitioning from the pharmaceutical frontier to the digital
              domain, I've concocted a variety of projects, each a potion of
              innovation. Many of these elixirs are open-source, waiting for
              fellow alchemists to explore and contribute. If curious about my
              digital concoctions, feel free to peruse the code. Suggestions and
              enhancements are the secret ingredients—always welcomed!
              Collaboration is the alchemical process for continual learning and
              growth. Ready for the next magical project? Let's concoct wonders
              together!
            </div>

            <div className="projects-list">
              <AllProjects />
            </div>
          </div>
          <div className="page-footer">
            <Footer />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Projects;
