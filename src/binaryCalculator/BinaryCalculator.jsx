import React from "react";
import { Link } from "react-router-dom";

const BinaryCalculator = () => {
  document.title = "Binary Calculator";

  return (
    <div className="binaryCalculator">
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default BinaryCalculator;
