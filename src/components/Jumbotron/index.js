import React from "react";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Directory</h1>
    </div>

  );
}

export default Jumbotron;
