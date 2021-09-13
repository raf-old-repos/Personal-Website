import React from "react";

import { RepoData } from "../types/RepoData"
import CardStats from "./CardStats";

// ! TODO styling

const ProjectCard: React.FC<RepoData> = (props) => {
  return (
    <React.Fragment>
      <div className="border-4 border-black dark:border-white rounded-md drop-shadow-md overflow-hidden">
        <h1 className="text-2xl align-text-top py-5">
          {props.fullName}
        </h1>
        <p>
          {props.description}
        </p>
        {/* ! TODO Temporary button for now, will make a seperate component later */}
        <button>
          <a href={props.link} className="font-extrabold text-indigo-600 border-4 rounded-lg ">
            {props.fullName}
          </a>
        </button>
        <CardStats starCount={props.starCount} forks={props.forks} openIssues={props.openIssues} />
      </div>
    </React.Fragment>
  );
};



export default ProjectCard;
