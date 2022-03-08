import React from "react";
import imgOne from "./images/calcOne.jpg";
import imgTwo from "./images/calcTwo.jpg";
import imgThree from "./images/calcThree.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="home">
      <h2>WelCome To The React World...</h2>
      <div className="menu">
        <nav>
          <Link to="/simple-calculator">
            <div className="simpleCalculator">
              <img src={imgThree} alt="Simple Calculator" />
              <p>Simple Calculator</p>
            </div>
          </Link>
          <Link to="/binary-calculator">
            <div className="binaryCalulator">
              <img src={imgThree} alt="Binary Calculator" />
              <p>Binary Calculator</p>
            </div>
          </Link>
          <Link to="/sci-calculator">
            <div className="sciCalculator">
              <img src={imgThree} alt="Sci Calculator" />
              <p>Scientific Calculator</p>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
