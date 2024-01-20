import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import Card from "../common/card";
import jatri from "../../assets/jatri.jpg";
import devs from "../../assets/100devs.jpg";

import "./styles/works.css";

const Works = () => {
  return (
    <div className="works">
      <Card
        icon={faBriefcase}
        title="Work"
        body={
          <div className="works-body">
            <div className="work">
              <img src={jatri} alt="jatri" className="work-image" />
              <div className="work-title">Jatri</div>
              <div className="work-subtitle">SDE Intern</div>
              <div className="work-duration">Jun 2023 - Aug 2023</div>
            </div>

            <div className="work">
              <img src={devs} alt="100devs" className="work-image" />
              <div className="work-title">100Devs</div>
              <div className="work-subtitle">Software Engineer</div>
              <div className="work-duration">Sep 2022 - May 2023</div>
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Works;
