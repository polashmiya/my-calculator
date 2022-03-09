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
            <div className="calculator">
              <img src={imgThree} alt="Simple Calculator" />
              <div className="overLay">
                <p>Simple Calculator</p>
              </div>
            </div>
          </Link>
          <Link to="/binary-calculator">
            <div className="calculator">
              <img src={imgThree} alt="Binary Calculator" />
              <div className="overLay">
                <p>Binary Calculator</p>
              </div>
            </div>
          </Link>
          <Link to="/sci-calculator">
            <div className="calculator">
              <img src={imgThree} alt="Sci Calculator" />
              <div className="overLay">
                <p>Scientific Calculator</p>
              </div>
            </div>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Home;
