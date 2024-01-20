import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/contact.css";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentSEO = SEO.find((item) => item.page === "contact");

  return (
    <React.Fragment>
      <Helmet>
        <title>{`Contact | ${INFO.main.title}`}</title>
        <meta name="description" content={currentSEO.description} />
        <meta name="keywords" content={currentSEO.keywords.join(", ")} />
      </Helmet>

      <div className="page-content">
        <NavBar active="contact" />
        <div className="content-wrapper">
          <div className="contact-logo-container">
            <div className="contact-logo">
              <Logo width={46} />
            </div>
          </div>

          <div className="contact-container">
            <div className="title contact-title">
              Let's Connect: Reach Out to Me!
            </div>

            <div className="subtitle contact-subtitle">
              Thank you for taking the plunge into the intriguing world of
              getting in touch! Your feedback, questions, and suggestions are as
              welcome as a well-commented code. If you have a specific inquiry
              or just want to say hello, drop me a line directly at &nbsp;{" "}
              <a href={`mailto:${INFO.main.email}`}>{INFO.main.email}</a>. I'll
              put on my superhero cape and strive to rescue your messages within
              24 hours—though, during the coding storms, it might take a bit
              longer. Alternatively, if you prefer the formal dance, use the
              contact form on my website. Fill in the required fields, and
              voilà! I'll gracefully waltz back to you. And for those who fancy
              the digital soirée, catch me on{" "}
              <a href={INFO.socials.linkedin} target="_blank" rel="noreferrer">
                {INFO.socials.linkedin}
              </a>
              . I'm there, sharing updates and engaging with my connections.
              Slide into my DMs, and let's make social media history together.
              Thanks a million for stopping by the coding carnival, and I
              eagerly await your dispatches from the digital realm!
            </div>
          </div>

          <div className="socials-container">
            <div className="contact-socials">
              <Socials />
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

export default Contact;
