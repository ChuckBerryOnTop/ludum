import React from "react";

const Jumbotron = ({ children }) => (
  <div
    style={{width: 500,height: 500, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron"
  >
    {children}
  </div>
);

export default Jumbotron;
