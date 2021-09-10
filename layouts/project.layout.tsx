import React from "react";


const ProjectLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="dark:bg-black bg-white overflow-hidden">
        <div className="border-4 dark:border-white border-black md:h-screen rounded-lg dark:text-white text-black overflow-scroll md:pt-0">
          <h1 className="flex flex-col justify-center items-start font-regular">
            Projects
          </h1>
          <div className="p-5 h-screen grid grid-rows-3 grid-flow-col md:grid-rows-6 gap-4">
            {children}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProjectLayout;
