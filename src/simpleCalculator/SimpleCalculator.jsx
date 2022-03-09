import React from "react";
import { Link } from "react-router-dom";

const SimpleCalculator = () => {
  document.title = "Simple Calculator";
  return (
    <div className="simpleCalculator">
      <Link to="/">Back Home</Link>
      <div className="section">
        <input type="text" />
        <div className="btn">
          <button>AC</button>
          <button>%</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>&divide;</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>&times; </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>-</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCalculator;
