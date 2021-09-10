import React from "react";
import Image from "next/image";

interface Props {
  fullName: string;
  description: string;
  fork: boolean;
  starCount: number;
  language: string;
  openIssues: number;
  forks: number;
  link: string;
}

const ProjectCard: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <div className="border-4 border-black dark:border-white rounded-md drop-shadow-md overflow-hidden">
        <Image
          className=" p-2 w-10 rounded-full align-top"
          src="https://github.com/Gitter499.png"
          alt="Someone's profile pic who happened to make the repo"
          width={"20vw"}
          height={"20vw"}
        />
      </div>
    </React.Fragment>
  );
};

export default ProjectCard;
