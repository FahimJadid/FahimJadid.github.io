import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

import "./styles/project.css";

const Project = (props) => {
  const { logo, title, description, linkText, link } = props;

  const maxDescriptionChars = 10;
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateDescription = isExpanded
    ? description
    : `${description.slice(0, maxDescriptionChars)}...`;

  return (
    <React.Fragment>
      <div className="project">
        {/* <Link to={link}> */}
        <div className="project-container">
          <div className="project-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="project-title">{title}</div>

          <div className="project-description" onClick={toggleAccordion}>
            {description}
            {truncateDescription}
            {description.length > maxDescriptionChars && (
              <span style={{ cursor: "pointer", color: "#14b8a6" }}>
                {isExpanded ? " See less" : " See more"}
              </span>
            )}
          </div>

          <Link to={link} className="project-link">
            <div className="project-link-icon">
              <FontAwesomeIcon icon={faLink} />
            </div>

            <div className="project-link-text">{linkText}</div>
          </Link>
        </div>
        {/* </Link> */}
      </div>
    </React.Fragment>
  );
};

export default Project;
