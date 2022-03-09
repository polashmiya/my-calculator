import React from "react";
import { Link } from "react-router-dom";

const ScientificCalculator = () => {
  document.title = "ScientificCalculator Calculator";

  return (
    <div className="sciCalculator">
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default ScientificCalculator;
