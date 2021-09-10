import React from "react";

const MainLayout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="dark:bg-black bg-white overflow-hidden">{children}</div>
    </React.Fragment>
  );
};

export default MainLayout;
