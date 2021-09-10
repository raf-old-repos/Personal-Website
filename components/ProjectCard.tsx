import React from "react";

import { RepoData } from "../types/RepoData"

const ProjectCard: React.FC<RepoData> = (props) => {
  return (
    <React.Fragment>
      <div className="border-4 border-black dark:border-white rounded-md drop-shadow-md overflow-hidden">
        <h1>
          {props.fullName}
        </h1>
      </div>
    </React.Fragment>
  );
};



export default ProjectCard;
